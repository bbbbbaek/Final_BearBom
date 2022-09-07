import Nav from "react-bootstrap/Nav";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Navbar from "react-bootstrap/Navbar";

function CourseNavbar() {
  return (
    <>
      <Navbar>
        <Nav id="nav-bar">
          <AnchorLink className="nav-list" href="#teacher">
            강사소개
          </AnchorLink>
          <AnchorLink className="nav-list" href="#class">
            클래스소개
          </AnchorLink>
          <AnchorLink className="nav-list" href="#cur">
            커리큘럼
          </AnchorLink>
          <AnchorLink className="nav-list" href="#time">
            시간표
          </AnchorLink>
          <AnchorLink className="nav-list" href="#loc">
            위치
          </AnchorLink>
          <AnchorLink className="nav-list" href="#notice">
            유의사항
          </AnchorLink>
          <AnchorLink className="nav-list" href="#review">
            후기
          </AnchorLink>
        </Nav>
      </Navbar>
    </>
  );
}

export default CourseNavbar;
