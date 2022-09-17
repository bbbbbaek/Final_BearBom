import Carousel from "react-bootstrap/Carousel";
import "../../css/detail.css";
function CarouselFadeExample({ course, courseIdx }) {
  // const test = course[courseIdx].courseContents;
  // console.log(test);
  return (
    // <Carousel fade>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src={require("../../img/img2.jpeg")}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src={require("../../img/img2.jpeg")}
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 "
    //       src={require("../../img/img2.jpeg")}
    //       alt="Third slide"
    //     />
    //   </Carousel.Item>

    // </Carousel>
    <div>
      <span>{course.courseContents}</span>
      {/* {course[courseIdx].courseAddress} */}
      {/* <button
        onClick={() => {
          console.log(course);
          console.log(courseIdx);
          console.log(course[courseIdx]);
          console.log(course[courseIdx].courseAddress);
        }}
      > */}
      {/* {course[courseIdx].courseContents} */}
      {/* {course} */}
      {/* </button> */}
    </div>
  );
}

export default CarouselFadeExample;
