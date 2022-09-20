import React from "react";
import styled from "styled-components";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <Nav>
        <FirstPageIcon sx={{ fontSize: "1.3rem" }}></FirstPageIcon>
        <ArrowBackIosNewIcon
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          sx={{ fontSize: "0.85rem" }}
        >
          &lt;
        </ArrowBackIosNewIcon>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <ArrowForwardIosIcon
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
          sx={{ fontSize: "0.85rem" }}
        >
          &gt;
        </ArrowForwardIosIcon>
        <LastPageIcon sx={{ fontSize: "1.3rem" }}></LastPageIcon>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 16px;
`;
// background: #cec3a7;
//    transform: translateY(-2px);
const Button = styled.button`
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 0.85rem;

  color: black;
  background: white;
  &:hover {
    background: #f7f7f7;
    cursor: pointer;
  }

  &[disabled] {
    background: ;
  }

  &[aria-current] {
    background: #1976d2;
    font-weight: ;
    color: #fff;
  }
`;

export default Pagination;
