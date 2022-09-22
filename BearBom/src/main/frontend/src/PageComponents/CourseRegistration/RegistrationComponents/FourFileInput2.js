import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { width } from "@mui/system";

const FourFileInput2 = ({formData, changeImages}) => {
  const [selectedImage, setSelectedImage] = useState();
  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    changeImages(selectedImage);
  }, [selectedImage]);
//   const test = false;
  

  // 파일 업로드시 미리보기
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      const $button = document.querySelector(".multiImgAddBtn2");
      $button.style.display = "none"
    }
  };

  // 이미지 삭제버튼 클릭시
  const removeSelectedImage = () => {
    setSelectedImage();
    const $button = document.querySelector(".multiImgAddBtn2");
    $button.style.display = "flex"
  };

  const inputRef = useRef();
  
  useEffect(() => {
    if(formData.imageList && (formData.imageList.length>2)){
     setSelectedImage(formData.imageList[2]);
     const $button = document.querySelector(".multiImgAddBtn2");
     $button.style.display = "none"
    }
   },[]);

  return (
    <>
      <div className="multiImgAdd2">
        <div className="multiImgAddBtn2">
        <Button
            variant="outlined"
            onClick={() => inputRef.current.click()}
            //  disabled={test}
            style={styles.container}
            sx={{width:140, height:130, borderRadius:2}}
        >
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
          ref={inputRef}
          hidden
        />
        <div className="multiImgAddInner2">
        <AddCircleOutlineIcon />
        <p className="imgEx">
        이미지 추가하기
        </p>
        </div>
        </Button>
        </div>

        {selectedImage && (
          <div className="multiImgPrev2">
            <div className="multiImgBox2">
                <img
                    src={URL.createObjectURL(selectedImage)}
                    style={styles.image}
                    alt="Thumbnail"
                    />
            </div>
            <div className="multiImgDel2">
            <button onClick={removeSelectedImage} style={styles.delete}>
              <HighlightOffIcon/>
            </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FourFileInput2;

// 이미지 스타일
const styles = {
  container: {
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 130 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "none",
    color: "grey",
    border: "none",
  },
};