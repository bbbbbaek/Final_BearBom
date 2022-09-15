import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../app-config";

import LikeButton from "../ModuleComponents/LikeButton";

const Saw = () => {
  const { id } = useParams();
  console.log(id);

  const [courseInfo, setCourseInfo] = useState({});
  const location = useLocation();
  useEffect(() => {
    let get_local = localStorage.getItem("data");
    setCourseInfo(location.state.courseInfo);
    // console.log(dataa);
    if (get_local == null) {
      get_local = [];
    } else {
      get_local = JSON.parse(get_local);
    }

    // console.log(id);
    let duplicateFlag = false;
    if (JSON.stringify(courseInfo) !== "{}") {
      for (let i = 0; i < get_local.length; i++) {
        if (courseInfo.courseIdx === get_local[i].courseIdx) {
          duplicateFlag = true;
          break;
        }
      }

      // if() 안에 변수명만 들어가면 무조건 true 거나 값이 있을때,
      //!변수명 하면은 false 거나 값이 null(undefined)
      if (!duplicateFlag) {
        get_local.push(courseInfo);
      }
      //get_local =[{}, {}, {} ,{}];

      // if (localStorage.get_local === undefined) {
      //   localStorage.setItem("data", JSON.stringify([]));
      // }

      if (get_local.length > 5) {
        // localStorage.clear();
        get_local.splice(0, 1);
      }

      localStorage.setItem("data", JSON.stringify(get_local));
    }
    // let tested = JSON.parse(localStorage.getItem("data"));
    // tested.unshift(id);
    // tested = [...new Set(tested)].slice(0, 3);
    // localStorage.setItem("data", JSON.stringify(tested));
  }, [courseInfo]);

  //
  // console.log(dataa);
  // console.log(dataa.id); // id 값
  // const id = dataa.id;
  // console.log(id);
  // like 구현 ///////////////////////
  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  useEffect((e) => {
    const fetchData = async () => {
      // const res = await axios.get(`${API_BASE_URL}/api/like/getLikeList`);
      // console.log(res);
      // if (res.data.type === "liked") setLike(true);
      const userId = localStorage.getItem("USER_ID");
      const token = localStorage.getItem("ACCESS_TOKEN");
      if (!token) {
        return;
      }

      axios({
        method: "GET",
        url: API_BASE_URL + "/api/like/getLikeList",
        params: { userId: userId, courseIdx: id },
        //403 에러는 보안관련 에러
        headers: {
          Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
        },
      })
        .then((response) => {
          console.log(response);
          if (response.data.likeState === "liked") {
            setLike(true);
          } else {
            setLike(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const toggleLike = async (e) => {
    // const res = await axios.post(`${API_BASE_URL}/api/like/{id}/insertLike`);
    const userId = localStorage.getItem("USER_ID");
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (!token) {
      alert("찜하기를 위해 로그인해주세요 :)");
      navigate("/login");
      return;
    }
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/like/${id}/insertLike`,
      //403 에러는 보안관련 에러
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
      data: { courseIdx: id, userId: userId },
    })
      .then((response) => {
        console.log(response);
        if (response.data.likeState === "like") {
          setLike(!like);
        } else {
          setLike(!like);
        }
      })
      .catch((error) => {
        console.log(error);
        //불필요한 alert
        // alert("로그인 해주세요 :)");
      });
    // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    // setLike(!like);
  };
  ///////////////////////////////////

  return (
    <>
      {courseInfo.courseNm}
      <LikeButton like={like} onClick={toggleLike}></LikeButton>
    </>
  );
};

export default Saw;
