import React from "react";
import "./payment.scss";
import kakaopay from "../../images/kakaopay.png";
import tosspay from "../../images/tosspay.png";
import creditcard from "../../images/creditcard.png";
import banktransfer from "../../images/banktransfer.png";
import ResultNotFound from "../ResultNotFound/ResultNotFound";

const Payment = () => {
  let fetchedData = [1, 2, 3];
  function onClickPayment(paymentInfo) {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp78005172");

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: paymentInfo[0], // PG사
      pay_method: paymentInfo[1], // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 100, // 결제금액
      name: "베어봄 결제 연동 Test", // 주문명
      buyer_name: "김광민", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
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
      alert("결제가 정상적으로 완료되었습니다.");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  const onSelectPG = (e) => {
    let paymentInfo;
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
    console.log(paymentInfo);
    onClickPayment(paymentInfo);
  };

  return (
    <>
      <div className="payment">
        <h5>
          <strong>장바구니</strong>
        </h5>
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
                      <td>box</td>
                      <td>1</td>
                      <td>img</td>
                      <td>누구와 함께하는 블라블라</td>
                      <td>2012/12/12</td>
                      <td>2012/12/12</td>
                      <td>2012/12/12</td>
                      <td>300,000</td>
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
