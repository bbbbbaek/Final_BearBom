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
import Helpdesk from "./PageComponents/Helpdesk";
import Mypage from "./PageComponents/Mypage";
import Login from "./PageComponents/Login";
import Join from "./PageComponents/Join";
import Detail from "./PageComponents/Detail";
import Top from "./ModuleComponents/Top";
import Chatbot from "./ModuleComponents/Chatbot";
import JoinTest from "./PageComponents/JoinComponents/JoinTest";
import Saw from "./PageComponents/Saw";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<Detail />} />
        <Route path="/course/registration" element={<CourseRegistration />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/joinTest" element={<JoinTest />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/saw/:id" element={<Saw />} />
      </Routes>
      <Top />
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
