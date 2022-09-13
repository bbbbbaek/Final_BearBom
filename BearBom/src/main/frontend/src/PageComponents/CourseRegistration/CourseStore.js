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

export default CourseStore;
