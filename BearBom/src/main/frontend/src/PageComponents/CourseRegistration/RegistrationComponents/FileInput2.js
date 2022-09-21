import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { width } from "@mui/system";

const FileInput2 = ({changeImages}) => {
  const [ImageFile, setImageFile] = useState();
  const [imageFileList, setImageFileList] = useState([]);
//   const test = false;
  useEffect(() => {
    imageFileList.forEach(image => {
      changeImages(image);
    })
  }, [imageFileList]);

  // 파일 업로드시 미리보기
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileList = Array.prototype.slice.call(e.target.files);
      setImageFile(e.target.files[0]);
      setImageFileList(fileList);
      console.log(imageFileList)
      const $button = document.querySelector(".multiImgAddBtn3");
      $button.style.display = "none"
    }
  };

  // 이미지 삭제버튼 클릭시
  const removeSelectedImage = () => {
    setImageFile();
    const $button = document.querySelector(".multiImgAddBtn3");
    $button.style.display = "flex"
  };

  const inputRef = useRef();

  return (
    <>
      <div className="multiImgAdd">
        <div className="multiImgAddBtn3">
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
        <div className="multiImgAddInner">
        <AddCircleOutlineIcon />
        <p className="multiImgEx">
        이미지 추가하기
        </p>
        </div>
        </Button>
        </div>

        {ImageFile && (
          <div className="multiImgPrev">
            <div className="multiImgBox">
                <img
                    src={URL.createObjectURL(ImageFile)}
                    style={styles.image}
                    alt="Thumbnail"
                    />
            </div>
            <div className="multiImgDel3">
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

export default FileInput2;

// 이미지 스타일
const styles = {
  container: {
    marginRight:7
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