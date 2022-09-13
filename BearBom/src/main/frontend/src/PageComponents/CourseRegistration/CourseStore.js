import create from "zustand";

//별도의 파일로 있다고 생각

const CourseStore = create(() => ({
  nm: "",
  onOff: "",
  level: "",
  runtime: "",
  levelContent: "",
  address: "",
  addressDef: "",
  zipcode: "",
  min: 0,
  max: 0,
}));

// const category = create(() => ({
//   cateNo : 0,
//   locaNo : 0,

// }));

// const courseFileStore = create(() => ({
//   COURSE_FILE_IDX : 0,
//   COURSE_FILE_ORG_NM : "",
//   COURSE_FILE_NEW_NM : "",
//   COURSE_FILE_PATH : "",

// }));

export default CourseStore;
