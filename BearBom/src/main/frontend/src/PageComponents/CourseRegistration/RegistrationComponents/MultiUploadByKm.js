import React, { useEffect, useState } from "react";
import "../../../css/MultiUpload.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const MultiUploadByKm = () => {
  const [fileImage, setFileImage] = useState([]);
  const [test, setTest] = useState();
  const [emptyArray, setEmptyArray] = useState(Array(4).fill());
  const [previewSwitch, setPreviewSwitch] = useState(false);

  const onRemove = (index) => {
    // setFileImage(fileImage.filter(!fileImage[index]));
    let copy = [...fileImage];
    copy.splice(index, 1);
    setFileImage(copy);
  };

  useEffect(() => {
    const kenny = [...fileImage];
    console.log(kenny);
    kenny.shift();
    console.log(kenny);
    setTest(kenny);
  }, [fileImage]);

  // setter 함수를 여기에 호출해버리면
  // ⭐️⭐️⭐️ 함수 실행 --> state 변경 --> 렌더링 --> 함수 실행 의 무한 루프에 빠져버린다!!! ⭐️⭐️⭐️
  // setTest(kenny);

  // 파일 이름을 string 형식으로 만들어주는 함수
  const saveFileImage = (e) => {
    setFileImage(fileImage.concat(URL.createObjectURL(e.target.files[0])));
  };

  return (
    <>
      <hr />
      <h1>Image Upload</h1>
      <p>설명: 리액트에서 이미지 업로드하기</p>
      <hr />
      <div className="grid-wrapper">
        <div className="grid-content">
          <img className="thumbnail" src={fileImage[0]} alt="" />
          {fileImage[0] ? (
            <img className="deleteButton" src={HighlightOffIcon} />
          ) : null}
        </div>
        {emptyArray.map((a, i) => {
          return (
            <div className="grid-content" key={i}>
              <img
                className="thumbnail"
                src={fileImage[i + 1]}
                alt=""
                onClick={() => {
                  setPreviewSwitch(!previewSwitch);
                }}
              />
              {fileImage[i + 1] ? (
                <img
                  className="deleteButton"
                  src={HighlightOffIcon}
                  onClick={() => {
                    onRemove(i + 1);
                  }}
                  alt=""
                />
              ) : null}
            </div>
          );
        })}
      </div>
      <input
        type="file"
        // 아래와 같이 accept 속성을 이용하여 이미지 파일만 선택 가능하거나, 특정 확장자만 선택 가능하도록 제한할 수 있음
        accept="image/*"
        onChange={saveFileImage}
      />
      <button
        onClick={() => {
          console.log(fileImage);
        }}
      >
        check state
      </button>
      {previewSwitch && (
        <Preview
          fileImage={fileImage}
          previewSwitch={previewSwitch}
          setPreviewSwitch={setPreviewSwitch}
        />
      )}
    </>
  );
};

const Preview = ({ fileImage, previewSwitch, setPreviewSwitch }) => {
  return (
    <>
      <div
        className="modalbody-outside"
        onClick={() => {
          setPreviewSwitch(!previewSwitch);
        }}
      >
        <div>
          <img src={fileImage[1]} alt="" />
        </div>
      </div>
    </>
  );
};

export default MultiUploadByKm;
