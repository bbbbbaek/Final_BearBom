import { Subtitles } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "../css/guide.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import guideData from "../ModuleComponents/guideData";
import { API_BASE_URL } from "../app-config";
import axios from "axios";

const Guide = ({ data }) => {
  // const [state, setState] = useState(guideData);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const guideDate = new FormData(e.target);
  //   const guideIdx = guideDate.get("guideIdx");
  //   const guideContent = guideDate.get("guideContent");
  //   const guideRegdate = guideDate.get("guideRegdate");
  //   const guideMdfdate = guideDate.get("guideMdfdate");
  // };

  // const [guide, setGuide] = useState([]);
  // useEffect(() => {
  //   //데이터불러오는 axios
  //   //setGuide(response.data);
  //   axios({
  //     method: "post",
  //     url: API_BASE_URL + "/api/PageComponents/Guide",
  //   }).then((response) => {
  //     console.log(response.data);
  //     setGuide(response.data);
  //   });
  // }, []);

  const [operation, setOperation] = useState([]);

  const [guideTitle, setGuidTitle] = useState("");
  const [guideContent, setGuideContent] = useState("");

  // let listUrl = "http://localhost:8080/api/guide/getOperationList";

  const list = () => {
    axios({
      url: API_BASE_URL + "/api/guide/getOperationList",
      method: "post",
      data: { guideContent: guideContent, guideTitle: guideTitle },
    })
      .then((response) => {
        console.log(response.data.data);
        setOperation(response.data.data);
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
      <div>
        <div className="all">
          <div className="jss130">
            <div className="jss132">
              <div className="jss134">
                <div className="jss136">
                  <h5 className="jss139">베어봄 GUIDE</h5>
                  <h5 className="jss139-2" style={{ color: "#958a78" }}>
                    일상의 따뜻한 휴식, 그리고 새로운 경험 😎😆🧐
                  </h5>
                  <div className="jss140">"안녕하세요"</div>
                  <div className="jss140">
                    "로컬 크리에이터 중심의 소셜 취미 클래스 플랫폼 &nbsp;
                    <b style={{ color: "#958a78" }}>베어봄</b>에 오신것을
                    환영합니다."
                  </div>
                  <div className="jss138">
                    <h5 className="jss138-1">"Let's MAKE"</h5>
                  </div>
                </div>
                <img
                  className="jss141"
                  src={require("../images/onepic.jpg")}
                ></img>
              </div>
            </div>
            <div className="jss145">
              <div className="jss144">
                <h5 className="jss144-1">1. 클래스 검색</h5>
                <div className="jss143"></div>
                <div className="144-2">수강하고픈 클래스를 찾아보세요</div>
              </div>
              <div className="jss146">
                <div className="jss151">
                  <img
                    className="jss152"
                    src={require("../images/twopic.png")}
                  ></img>
                </div>
              </div>
            </div>
            <div className="jss148">
              <div className="jss144">
                <h5 className="jss144-1">2. 일정 탐색</h5>
                <div className="jss143"></div>
                <div className="144-2">신청 가능한 일정을 찾아보세요</div>
              </div>
              <div className="jss146">
                <div className="jss151">
                  <img
                    className="jss152"
                    src={require("../images/threepic.png")}
                  ></img>
                </div>
              </div>
            </div>
            <div className="jss145">
              <div className="jss144">
                <h5 className="jss144-1">3. 클래스 문의</h5>
                <div className="jss143"></div>
                <div className="144-2">
                  개설된 일정이 없다면 원하는 일정을 강사님께 문의 드려보세요
                </div>
              </div>
              <div className="jss146">
                <div className="jss151">
                  <img
                    className="jss152"
                    src={require("../images/fourpic.png")}
                  ></img>
                </div>
              </div>
            </div>
            <div className="jss154">
              <div className="jss155">
                <div className="jss157">
                  <h4 className="jss159">자주 묻는 질문</h4>
                  <form>
                    <div>
                      {operation.map((a, i) => {
                        return (
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography
                                sx={{ fontWeight: "bold" }}
                                name="guideTitle"
                                value={guideTitle}
                              >
                                {operation[i].guideTitle}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography
                                name="guideContent"
                                value={guideContent}
                              >
                                {operation[i].guideContent}
                              </Typography>
                              {operation[i].guideTitle.includes("환불") ? (
                                <>
                                  <p>2. 날짜 별 취소 및 환불 정책</p>
                                  <table className="table1">
                                    <tr className="tr1">
                                      <td className="td1">
                                        클래스 4일 이전 취소
                                      </td>
                                      <td className="td2">100% 환불</td>
                                    </tr>
                                    <tr className="tr1">
                                      <td className="td1">
                                        클래스 3일 전 취소
                                      </td>
                                      <td className="td2">70% 환불</td>
                                    </tr>
                                    <tr className="tr1">
                                      <td className="td1">
                                        클래스 2일 전 취소
                                      </td>
                                      <td className="td2">50% 환불</td>
                                    </tr>
                                    <tr className="tr1">
                                      <td className="td1">
                                        클래스 하루 전 또는 당일 취소
                                      </td>
                                      <td
                                        className="td2"
                                        style={{ color: "orange" }}
                                      >
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
                  </form>
                  {/* <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          클래스에 어떻게 참여 할 수 있나요?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          참여 하곡자 하시는 클래스를 결제 하시면 참여 확인
                          티켓이 발급 됩니다. 결제와 동시에 강사님께도 알림이
                          가므로, 해당 시간에 수업에 참여 하실 수 있습니다.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel3a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          클래스 수강 비용은 얼마 인가요?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          클래스마다 강사님께서 책정해주신 금액으로 결제/신청
                          하실 수 있습니다. 무료로 진행 되는 클래스 부터
                          원데이클래스(평균2~7만원), 정규클래스 등에 따라 비용이
                          다양합니다.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div className="accordion4">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel4a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          취소/환불은 어떻게 할 수 있나요?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <p>
                            1.클래스 결제/예약 내역 페이지에서 취소하고자 하시는
                            클래스 티켓의 수강 취소 버튼을 클릭하시면 취소
                            신청이 완료됩니다.
                          </p>
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
                              <td className="td1">
                                클래스 하루 전 또는 당일 취소
                              </td>
                              <td className="td2" style={{ color: "orange" }}>
                                환불 불가
                              </td>
                            </tr>
                          </table>
                          <div className="accordion4-1"></div>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel5a-header"
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          기타 문의
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          기타 문의 사항은 우측 하단의 실시간 채팅 버튼을 통해
                          문의 주실 수 있습니다.
                        </Typography>
                      </AccordionDetails>
                    </Accordion> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Guide;
