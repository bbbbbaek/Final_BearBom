/* eslint-disable jsx-a11y/alt-text */

import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./PageComponents/Header";
import Footer from "./PageComponents/Footer";
import Mainpage from "./PageComponents/Mainpage";
import Course from "./PageComponents/Course";
import CourseRegistration from "./PageComponents/CourseRegistration";
import Guide from "./PageComponents/Guide";
import Helpdesk from "./PageComponents/Helpdesk/Home/Helpdesk";
import Mypage from "./PageComponents/MyPage/Home/Mypage";
import Login from "./PageComponents/Login";
import Join from "./PageComponents/Join";
import Detail from "./PageComponents/Detail/Detail";
import Top from "./ModuleComponents/Top";
import Chatbot from "./ModuleComponents/Chatbot";
import JoinTest from "./PageComponents/JoinComponents/JoinTest";
import LoginTest from "./PageComponents/JoinComponents/LoginTest";
import Saw from "./PageComponents/Saw";
import Admin from "./PageComponents/Admin/Home/Admin";
import Page404 from "./PageComponents/Page404";
import RedirectForKakao from "./PageComponents/JoinComponents/RedirectForKakao";
import RedirectForKakaoLogout from "./PageComponents/JoinComponents/RedirectForKakaoLogout";
import KakaoPayRe from "./PageComponents/Detail/KakaoPayRe";
import KakaoPayR from "./PageComponents/Detail/KakaoPayR";
import PwFind from "./PageComponents/PwFind";
import CourseSearch from "./PageComponents/CourseSearch";
import Board from "./ModuleComponents/Board/Board";
import Notice from "./PageComponents/Helpdesk/Notice/Notice";
import FAQ from "./PageComponents/Helpdesk/FAQ/FAQ";
import Inquiry from "./PageComponents/Helpdesk/Inquiry/Inquiry";
import TakenClassView from "./PageComponents/MyPage/Menu/TakenClassView";
import OpenedClassView from "./PageComponents/MyPage/Menu/OpenedClassView";
import UserInfoModification from "./PageComponents/MyPage/Menu/UserInfoModification";
import LecturerInfoModification from "./PageComponents/MyPage/Menu/LecturerInfoModification";
import InquiryView from "./PageComponents/MyPage/Menu/InquiryView";
import WishlistView from "./PageComponents/MyPage/Menu/WishlistView";
import { useState } from "react";
import RecentTransaction from "./PageComponents/MyPage/Menu/RecentTransaction";
import SalesMgmt from "./PageComponents/Admin/Menu/SalesMgmt";
import OrderMgmt from "./PageComponents/Admin/Menu/OrderMgmt";
import UserMgmt from "./PageComponents/Admin/Menu/UserMgmt";
import CourseMgmt from "./PageComponents/Admin/Menu/CourseMgmt";
import NoticeMgmt from "./PageComponents/Admin/Menu/NoticeMgmt";
import FAQMgmt from "./PageComponents/Admin/Menu/FAQMgmt";
import InquiryMgmt from "./PageComponents/Admin/Menu/InquiryMgmt";

import CardSelect from "./PageComponents/Detail/PayCardOption";
import PayWindow from "./PageComponents/Detail/PayWindow";

import LatestTransaction from "./PageComponents/Admin/Menu/LatestTransaction";
import BoardWrite from "./ModuleComponents/BoardWrite/BoardWrite";
import PaymentTest from "./ModuleComponents/Payment/PaymentTest";

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/oauth/kakao" element={<RedirectForKakao />} />
          <Route
            path="/oauth/kakao/logout"
            element={<RedirectForKakaoLogout />}
          />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<Detail />} />
          <Route path="/course/registration" element={<CourseRegistration />} />
          <Route
            path="/course/search/:courseSearch"
            element={<CourseSearch />}
          />
          <Route path="/guide" element={<Guide />} />
          <Route path="/helpdesk" element={<Helpdesk />}>
            <Route path="notice" element={<Notice />} />
            <Route path="notice/:id" element={<Board />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="inquiry" element={<Inquiry />} />
            <Route path="inquiry/payment" element={<PaymentTest />} />
          </Route>
          <Route path="/mypage" element={<Mypage />}>
            <Route path="" element={<RecentTransaction />} />
            <Route path="course/user" element={<TakenClassView />} />
            <Route path="course/lecturer" element={<OpenedClassView />} />
            <Route path="info/user" element={<UserInfoModification />} />
            <Route
              path="info/lecturer"
              element={<LecturerInfoModification />}
            />
            <Route path="inquiry/view" element={<InquiryView />} />
            <Route path="inquiry/view/:id" element={<Board />} />
            <Route path="inquiry" element={<Inquiry />} />
            <Route path="wishlist" element={<WishlistView />} />
            <Route path="wishlist/:id" element={<Board />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/loginTest" element={<LoginTest />} />
          <Route path="/join" element={<Join />} />
          <Route path="/joinTest" element={<JoinTest />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/saw/:id" element={<Saw />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<LatestTransaction />} />
            <Route path="sales" element={<SalesMgmt />} />
            <Route path="orders" element={<OrderMgmt />} />
            <Route path="users" element={<UserMgmt />} />
            {/* 유저 정보 클릭 시 띄울 컴포넌트 만들어야 함 */}
            <Route path="courses" element={<CourseMgmt />} />
            <Route path="courses/:id" element={<Board />} />
            {/* 공지, FAQ, 문의 답변 작성할 수 있는 컴포넌트 만들어야 함 */}
            <Route path="notice" element={<NoticeMgmt />} />
            <Route path="notice/:id" element={<Board />} />
            <Route path="faq" element={<FAQMgmt />} />
            <Route path="faq/:id" element={<Board />} />
            <Route path="faq/board" element={<BoardWrite />} />
            <Route path="inquiry" element={<InquiryMgmt />} />
            <Route path="inquiry/:id" element={<Board />} />
          </Route>
          <Route path="/*" element={<Page404 />} />
          <Route path="/payready" element={<KakaoPayR />} />
          <Route path="/payresult" element={<KakaoPayRe />} />
          <Route path="/pwfind" element={<PwFind />} />
          {/* <Route path="/payoption" element={<CardSelect />} /> */}
          <Route path="/paywindow" element={<PayWindow />} />
        </Routes>
        <Top />
        <Chatbot />
      </div>

      <Footer />
    </>
  );
}

export default App;
