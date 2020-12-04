import React, { Fragment, useEffect } from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-classic-base64";
const BlogEditor = (props) => {
 
  return (
    <Fragment className=" w-full">
      <CKEditor
        id
        editor={ClassicEditor}
        data="<p></p>"
        onInit={(editor) => {
          editor.setData();
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data)
          // setValue("content", data, {
          //   shouldValidate: true,
          //   shouldDirty: true,
          // });
        }}
      />
    </Fragment>
  );
};

export default BlogEditor;
