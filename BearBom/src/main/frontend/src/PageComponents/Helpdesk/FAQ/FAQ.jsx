import React, { useState, useEffect } from "react";
import "./faq.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import useStore from "../../../store/store.js";

const FAQ = ({ data }) => {
  // const [state, setState] = useState(faqData);

  const [faq, setFaq] = useState([]);

  const { guideTitle } = useStore();
  const { guideContent } = useStore();

  // const [helpDeskTitle, setHelpDeskTitle] = useState("");
  // const [helpDeskContent, setHelpDeskContent] = useState("");

  const list = () => {
    axios({
      url: API_BASE_URL + "/api/helpdesk/getFaqList",
      method: "get",
    })
      .then((response) => {
        console.log(response.data.data);
        setFaq(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    list();
  }, []);

  return (
    <>
      <h5>
        <strong>자주 묻는 질문</strong>
      </h5>
      <hr />
      <div className="helpdesk_faq">
        {faq.map((a, i) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  style={{ fontWeight: "bold" }}
                  name="guideTitle"
                  value={guideTitle}
                >
                  {faq[i].guideTitle}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography name="guideContent" value={guideContent}>
                  {faq[i].guideContent}
                </Typography>
                {faq[i].guideTitle.includes("환불") ? (
                  <>
                    <p>2. 날짜 별 취소 및 환불 정책</p>
                    <table className="table1">
                      <tr className="tr1">
                        <td className="td1">클래스 4일 이전 취소</td>
                        <td className="td2">100% 환불</td>
                      </tr>
                      <tr className="tr1">
                        <td className="td1">클래스 3일 전 취소</td>
                        <td className="td2">70% 환불</td>
                      </tr>
                      <tr className="tr1">
                        <td className="td1">클래스 2일 전 취소</td>
                        <td className="td2">50% 환불</td>
                      </tr>
                      <tr className="tr1">
                        <td className="td1">클래스 하루 전 또는 당일 취소</td>
                        <td className="td2" style={{ color: "orange" }}>
                          환불 불가
                        </td>
                      </tr>
                    </table>
                  </>
                ) : (
                  ""
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};
export default FAQ;
