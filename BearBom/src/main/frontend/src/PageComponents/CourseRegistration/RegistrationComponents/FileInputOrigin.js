import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { width } from "@mui/system";

const FileInputOrigin = ({changeImages}) => {
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
      const $button = document.querySelector(".imgAddBtn2");
      $button.style.display = "none"
    }
  };

  // 이미지 삭제버튼 클릭시
  const removeSelectedImage = () => {
    setImageFile();
    const $button = document.querySelector(".imgAddBtn2");
    $button.style.display = "flex"
  };

  const inputRef = useRef();

  return (
    <>
      <div className="imgAdd">
        <div className="imgAddBtn2">
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
          multiple="multiple"
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

        {ImageFile && (
          <div className="imgPrev">
            <div className="imgBox">
                <img
                    src={URL.createObjectURL(ImageFile)}
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

export default FileInputOrigin;

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