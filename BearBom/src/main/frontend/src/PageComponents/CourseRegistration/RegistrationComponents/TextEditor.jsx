import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import { useEffect } from "react";
import { useState } from "react";

const TextEditor = ({contents, setContents, formData, saveFormData, handleContents}) => {
  

  const [formObj, setFormObj] = useState({});

  useEffect(() => {
    saveFormData(formObj);
 }, [formObj]);

 useEffect(() => {
  setFormObj({...formObj, "courseContents": contents})
 }, [contents]);

  useEffect(() => {
    setContents(formData.courseContents);
  },[]);


  return (
    <>
      <div>---</div>
      <div>
        <CKEditor
          editor={ClassicEditor}
          data={contents}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(e) => {
            handleContents(e);
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
