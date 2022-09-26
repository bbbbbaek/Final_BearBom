import React, { useEffect } from "react";
import "./payment.scss";
import kakaopay from "../../images/kakaopay.png";
import tosspay from "../../images/tosspay.png";
import creditcard from "../../images/creditcard.png";
import banktransfer from "../../images/banktransfer.png";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
import { onRequest } from "../UsefulFunctions/ApiService";
import data from "../data";
import axios from "axios";
import { useState } from "react";
import { API_BASE_URL } from "../../app-config";

const Payment = () => {
  const [userData, setUserData] = useState();
  const [fetchedData, setFetchedData] = useState();
  const [cart, setCart] = useState([]);

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
      console.log(res[1].data.getOrderedCourseList);
      console.log(res[0].data);
      console.log(res[1].data);
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
    console.log(response);
    console.log(merchant_uid);
    console.log(success);
    console.log(error_msg);
    if (success) {
      console.log(success);
      let data = {
        courseIdx: cart[0].courseIdx,
        orderNm: "아직 데이터 매핑 못했습니다;",
        pgNm: "아직 데이터 매핑 못했습니다;",
        paymentMethod: "아직 데이터 매핑 못했습니다;",
      };
      onRequest("/api/order/updateOrderYn", "post", data);
      alert("결제가 정상적으로 완료되었습니다.");
      console.log(data);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  const onSelectOrder = (index) => {
    let selectedArray = fetchedData.filter((a) => {
      return a.courseIdx === index;
    });
    // cart에 해당 array가 담겨있는지 체크
    const test = cart.filter((a) => {
      return a.courseIdx === index;
    });

    if (Array.isArray(test) && test.length === 0) {
      cart.push(...selectedArray);
    } else {
      cart.splice(cart.indexOf(test.courseIdx === index), 1);
    }
  };

  const onSelectPG = (e) => {
    let otherInfo = {
      courseCost: cart[0].courseCost,
      courseNm: cart[0].courseNm,
      userNm: userData.userNm,
      userTel: userData.userTel,
      userEmail: userData.userEmail,
      userAddress: userData.userEmail,
      userZipcode: userData.userZipcode,
    };
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
        <button
          onClick={() => {
            console.log(cart);
          }}
        >
          click
        </button>
        <hr />
        {fetchedData ? (
          <div className="payment_body">
            <div className="table">
              <table>
                <tr>
                  <td className="th l5"></td>
                  <td className="th l5">번호</td>
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
            <div className="sum">총 주문금액 : 10000원</div>
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
        ) : (
          <ResultNotFound />
        )}
      </div>
    </>
  );
};

export default Payment;
