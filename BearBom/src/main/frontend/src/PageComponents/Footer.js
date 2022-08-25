import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-logo"></div>
          <div className="footer-content">
            <h5>베어봄컴퍼니(주)</h5>
            <hr />
            <p>
              대표이사 : 이종현 | 사업자등록번호 : 220-81-62517 |
              통신판매업신고번호 : 제 2022-서울-0001호
            </p>
            <p>
              주소 : 서울 강남구 강남대로94길 20, 삼오빌딩(5층 ~ 9층) | 대표전화
              : 02-3486-9600 | 이메일 : service@bearbom.com
            </p>
            <p>© BEARBOM Corp.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
