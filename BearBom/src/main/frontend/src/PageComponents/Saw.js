import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Saw = (props) => {
  const { id } = useParams();
  const [dataa, setDataa] = useState({});
  const location = useLocation();
  useEffect(() => {
    let get_local = localStorage.getItem("data");
    setDataa(location.state.dataa);
    // console.log(dataa);
    if (get_local == null) {
      get_local = [];
    } else {
      get_local = JSON.parse(get_local);
    }

    // console.log(id);
    get_local.push(dataa);
    //get_local =[{}, {}, {} ,{}];

    get_local = new Set(get_local);
    get_local = [...get_local];

    // if (localStorage.get_local === undefined) {
    //   localStorage.setItem("data", JSON.stringify([]));
    // }

    if (get_local.length >= 7) {
      localStorage.clear();
    } else {
      console.log(get_local.length);
      localStorage.setItem("data", JSON.stringify(get_local));
    }

    // let tested = JSON.parse(localStorage.getItem("data"));
    // tested.unshift(id);
    // tested = [...new Set(tested)].slice(0, 3);
    // localStorage.setItem("data", JSON.stringify(tested));
  }, [dataa]);
  return <>{dataa.title}</>;
};

export default Saw;
