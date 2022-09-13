import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const SideBar = ({ setTab }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClick = (open, setOpen) => {
    setOpen(!open);
  };
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            메뉴
          </ListSubheader>
        }
      >
        {/* 1번 */}
        <ListItemButton
          onClick={() => {
            handleClick(open1, setOpen1);
          }}
        >
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText primary="강좌 조회" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              {/* <ListItemIcon>-</ListItemIcon> */}
              <ListItemText
                primary="수강 내역 조회"
                onClick={() => {
                  setTab(0);
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              {/* <ListItemIcon>- </ListItemIcon> */}
              <ListItemText
                primary="개설 내역 조회"
                onClick={() => {
                  setTab(1);
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>
        {/* 2번 */}
        <ListItemButton
          onClick={() => {
            handleClick(open2, setOpen2);
          }}
        >
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText primary="회원 정보 조회" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              {/* <ListItemIcon>- </ListItemIcon> */}
              <ListItemText
                primary="기본 정보 수정"
                onClick={() => {
                  setTab(2);
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              {/* <ListItemIcon>- </ListItemIcon> */}
              <ListItemText
                primary="강사 프로필 수정"
                onClick={() => {
                  setTab(3);
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>
        {/* 3번 */}
        <ListItemButton
          onClick={() => {
            handleClick(open3, setOpen3);
          }}
        >
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText primary="문의내역 조회" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              {/* <ListItemIcon>- </ListItemIcon> */}
              <ListItemText
                primary="문의 내역 조회"
                onClick={() => {
                  setTab(4);
                }}
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              {/* <ListItemIcon>- </ListItemIcon> */}
              <ListItemText
                primary="문의하기"
                onClick={() => {
                  setTab(5);
                }}
              />
            </ListItemButton>
          </List>
        </Collapse>
        {/* 4번 */}
        <ListItemButton>
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText
            primary="찜한 클래스 조회"
            onClick={() => {
              setTab(6);
            }}
          />
        </ListItemButton>
      </List>
    </>
  );
};

export default SideBar;
