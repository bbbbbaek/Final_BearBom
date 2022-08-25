import { Button } from "@mui/material";
import { useRef, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { width } from "@mui/system";

const ThumbnailInput = () => {
  const [selectedImage, setSelectedImage] = useState();
//   const test = false;
  

  // 파일 업로드시 미리보기
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      const $button = document.querySelector(".imgAddBtn");
      $button.style.display = "none"
    }
  };

  // 이미지 삭제버튼 클릭시
  const removeSelectedImage = () => {
    setSelectedImage();
    const $button = document.querySelector(".imgAddBtn");
    $button.style.display = "flex"
  };

  const inputRef = useRef();

  return (
    <>
      <div className="imgAdd">
        <div className="imgAddBtn">
        <Button
            variant="outlined"
            onClick={() => inputRef.current.click()}
            //  disabled={test}
            style={styles.container}
            sx={{width:580, height:400, borderRadius:2}}
        >
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
          ref={inputRef}
          hidden
        />
        <div className="imgAddInner">
        <AddCircleOutlineIcon />
        <p className="imgEx">
        이미지 추가하기
        </p>
        </div>
        </Button>
        </div>

        {selectedImage && (
          <div className="imgPrev">
            <div className="imgBox">
                <img
                    src={URL.createObjectURL(selectedImage)}
                    style={styles.image}
                    alt="Thumbnail"
                    />
            </div>
            <div className="imgDel">
            <button onClick={removeSelectedImage} style={styles.delete}>
              삭제하기<HighlightOffIcon/>
            </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ThumbnailInput;

// 이미지 스타일
const styles = {
  container: {
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "none",
    color: "grey",
    border: "none",
  },
};