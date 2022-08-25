import React, { useState } from "react";
import "../css/faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "./faqData";

const FAQ = ({ data }) => {
  const [state, setState] = useState(faqData);
  return (
    <>
      <div className="faq-main">
        {faqData.map((a, i) => {
          return (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontWeight: "bold" }}>
                  {state[i].title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{state[i].content}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};
export default FAQ;
