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
import Notice from "./PageComponents/Notice";
import Helpdesk from "./PageComponents/Helpdesk";
import Mypage from "./PageComponents/Mypage";
import Login from "./PageComponents/Login";
import Detail from "./PageComponents/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<Detail />} />
        <Route path="/course/registration" element={<CourseRegistration />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/helpdesk" element={<Helpdesk />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
