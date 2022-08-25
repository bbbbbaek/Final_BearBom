import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>공지사항</p>
        <hr style={{ color: "black" }} />
        <p>
          네이버(주)
          대표이사최수연사업자등록번호220-81-62517통신판매업신고번호제2006-경기성남-0692호
        </p>

        <p>
          주소경기도 성남시 분당구 정자일로 95, NAVER 1784,
          13561대표전화1588-3820이메일ccnaver@naver.com호스팅 서비스 제공NAVER
          Cloud
        </p>

        <p>
          개인정보처리방침네이버 이용약관VIBE 이용약관고객센터결제/환불 안내VIBE
          스마트봇톡톡상담사업자정보 확인© NAVER Corp.
        </p>
      </div>
    </>
  );
};

export default Footer;
