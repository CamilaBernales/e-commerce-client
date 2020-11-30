import React, { Fragment, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const BlogEditor = (props) => {
 
  return (
    <Fragment className="container w-full">
      <CKEditor
        id
        editor={ClassicEditor}
        data=""
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
