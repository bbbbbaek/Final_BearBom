import React, { useState } from "react";
import "./helpdesk.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Notice from "../Notice/Notice";
import FAQ from "../FAQ/FAQ";
import Inquiry from "../Inquiry/Inquiry";
import banner from "../../../images/helpdesk-banner.png";

const Helpdesk = () => {
  const [tabContent, setTabContent] = useState(0);

  const onClickNotice = () => {};
  return (
    <>
      <div className="helpdesk_home">
        <div className="banner" />
        <br />
        <div className="body">
          <div className="menuBar">
            <div
              className="menu"
              id=""
              onClick={() => {
                setTabContent(0);
              }}
            >
              공지사항
            </div>
            <div
              className="menu"
              id=""
              onClick={() => {
                setTabContent(1);
              }}
            >
              FAQ
            </div>
            <div
              className="menu"
              id=""
              onClick={() => {
                setTabContent(2);
              }}
            >
              1:1문의
            </div>
          </div>

          <br />
          {/* Modal부분 */}
          <div className="content">
            {[<Notice />, <FAQ />, <Inquiry />][tabContent]}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Helpdesk;
