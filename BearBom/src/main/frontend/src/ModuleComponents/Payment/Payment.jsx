import React, { useEffect } from "react";
import "./payment.scss";
import kakaopay from "../../images/kakaopay.png";
import tosspay from "../../images/tosspay.png";
import creditcard from "../../images/creditcard.png";
import banktransfer from "../../images/banktransfer.png";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
import { onRequest } from "../UsefulFunctions/ApiService";
import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../../app-config";

const Payment = () => {
  const [userData, setUserData] = useState();
  const [fetchedData, setFetchedData] = useState();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // 유저 정보
    const promise1 = axios({
      method: "get",
      url: API_BASE_URL + "/api/mypage/getUser",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });
    // 강의 정보
    const promise2 = axios({
      method: "get",
      url: API_BASE_URL + "/api/order/getOrderList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    });
    Promise.all([promise1, promise2]).then((res) => {
      setUserData(res[0].data);
      setFetchedData(res[1].data.getOrderedCourseList);
    });
  }, []);
  let paymentInfo;

  function onClickPayment(paymentInfo) {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp78005172");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: paymentInfo[0], // PG사
      pay_method: paymentInfo[1], // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: cart[0].courseCost, // 결제금액
      name: cart[0].courseNm, // 주문명
      buyer_name: userData.userNm, // 구매자 이름
      buyer_tel: userData.userTel, // 구매자 전화번호
      buyer_email: userData.userEmail, // 구매자 이메일
      buyer_addr: userData.userEmail, // 구매자 주소
      buyer_postcode: userData.userZipcode, // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;
    if (success) {
      // 콘솔에 띄울 성공 메시지라 삭제하지 않기
      console.log(success);
      let data = {
        courseIdx: cart[0].courseIdx,
        orderNm: merchant_uid,
        pgNm: paymentInfo[0],
        paymentMethod: paymentInfo[1],
        orderPri: cart[0].courseCost,
      };
      onRequest(API_BASE_URL + "/api/order/updateOrderYn", "post", data)
        .then(alert("결제가 정상적으로 완료되었습니다."))
        .catch((err) => {
          alert("알 수 없는 이유로 결제에 실패했습니다.");
          // 콘솔에 띄울 에러 메시지라 삭제하지 않기
          console.log(err);
          return err;
        });
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  const onSelectOrder = (index) => {
    let selectedArray = fetchedData.filter((a) => {
      return a.courseIdx === index;
    });
    // cart에 해당 array가 담겨있는지 체크
    const checkingCart = cart.filter((a) => {
      return a.courseIdx === index;
    });
    // cart 배열에 클릭한 상품이 담겨 있으면 splice, 안담겨 있으면 push
    if (Array.isArray(checkingCart) && checkingCart.length === 0) {
      cart.push(...selectedArray);
    } else {
      cart.splice(cart.indexOf(checkingCart.courseIdx === index), 1);
    }
    console.log(cart);
    const getTotalPrice = () => {
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].courseCost;
      }
      return sum;
    };
    console.log(getTotalPrice());
    setTotalPrice(getTotalPrice());
  };

  const onSelectPG = (e) => {
    switch (e.target.id) {
      case "kakaopay":
        paymentInfo = ["kakaopay.TC0ONETIME", "kakaopay"];
        break;
      case "tosspay":
        paymentInfo = ["tosspay.tosstest", "tosspay"];
        break;
      case "card":
        paymentInfo = ["html5_inicis.INIpayTest", "card"];
        break;
      case "transfer":
        paymentInfo = ["html5_inicis.INIpayTest", "trans"];
        break;
      default:
        break;
    }
    onClickPayment(paymentInfo);
  };

  return (
    <>
      <div className="payment">
        <h5>
          <strong>장바구니</strong>
        </h5>
        <hr />
        {!fetchedData || fetchedData.length === 0 ? (
          <ResultNotFound />
        ) : (
          <div className="payment_body">
            <div className="table">
              <table>
                <tr>
                  <td className="th l5"></td>
                  <td className="th l10">번호</td>
                  <td className="th l5"></td>
                  <td className="th l40">강의명</td>
                  <td className="th l15">강사명</td>
                  <td className="th l15">시작일</td>
                  <td className="th l15">종료일</td>
                  <td className="th l15">가격</td>
                </tr>
                {fetchedData.map((a, i) => {
                  return (
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          onClick={() => {
                            onSelectOrder(a.courseIdx);
                          }}
                        />
                      </td>
                      <td>{a.courseIdx}</td>
                      <td>{a.courseThumb}</td>
                      <td>{a.courseNm}</td>
                      <td>{a.userId}</td>
                      <td>{a.courseStDate}</td>
                      <td>{a.courseEndDate}</td>
                      <td>{a.courseCost}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="sum">
              총 주문금액 : {totalPrice.toLocaleString()}원
            </div>
            <span>결제 수단을 선택해주세요</span>
            <hr />
            <div className="paymentMethod">
              <div id="kakaopay" onClick={onSelectPG}>
                <img id="kakaopay" src={kakaopay} alt="kakao" />
                <span id="kakaopay">카카오톡 간편결제</span>
              </div>
              <div id="tosspay" onClick={onSelectPG}>
                <img id="tosspay" src={tosspay} alt="toss" />
                <span id="tosspay">토스 간편결제</span>
              </div>
              <div id="card" onClick={onSelectPG}>
                <img id="card" src={creditcard} alt="card" />
                <span id="card">카드결제</span>
              </div>
              <div id="transfer" onClick={onSelectPG}>
                <img id="transfer" src={banktransfer} alt="transfer" />
                <span id="transfer">실시간 계좌이체</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Payment;
