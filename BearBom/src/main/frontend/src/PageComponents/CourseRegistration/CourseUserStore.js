import create from "zustand";

  const CourseUserStore  = create(() => ({
    id : "",
    tel : "",
    lecturerInfo : "",
    role: "ROLE_USER"
  }));

  export default CourseUserStore;