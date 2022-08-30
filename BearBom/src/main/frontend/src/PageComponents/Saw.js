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
    localStorage.setItem("data", JSON.stringify(get_local));
  }, [dataa]);
  return <>{dataa.title}</>;
};

export default Saw;
