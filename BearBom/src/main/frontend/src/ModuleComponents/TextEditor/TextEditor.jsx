import React from "react";
import "./texteditor.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

const TextEditor = ({ boardData, setBoardData }) => {
  ClassicEditor.create(document.querySelector("#editor"), {
    ckfinder: {
      url: "{{route('ckeditor.upload').'?_token='.csrf_token()}}",
    },
  }).catch((error) => {
    console.error(error);
  });
  return (
    <>
      <div>{parse(boardData)}</div>
      <div>
        <CKEditor
          editor={ClassicEditor}
          data="기존 입력값 받아오기"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setBoardData(data);
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </>
  );
};

export default TextEditor;
