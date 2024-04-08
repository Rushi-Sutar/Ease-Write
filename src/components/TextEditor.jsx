import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [text, setText] = useState("");
  const editorRef = useRef(null);

  const handleChange = (value) => {
    setText(value);
  };

  const exportAsDoc = () => {
    const content = editorRef.current.editor.root.innerHTML;
    const formattedContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Document</title>
      </head>
      <body>${content}</body>
      </html>
    `;

    const blob = new Blob([formattedContent], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "document.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="p-4">
        <ReactQuill
          className="h-screen w-full md:w-3/4 lg:w-2/3 mx-auto"
          ref={editorRef}
          value={text}
          onChange={handleChange}
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          placeholder="Write something..."
        />
      </div>
      <div className="flex justify-center items-center py-4">
        <button
          className="mt-20 z-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={exportAsDoc}
        >
         Download<u className="pl-3">↓</u>
        </button>
      </div>
    </>
  );
};

TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
    [{ script: "sub" }, { script: "super" }],
    [{ code: { language: "javascript" } }],
  ],
  clipboard: {
    matchVisual: false,
  },
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "color",
  "background",
  "align",
  "link",
  "image",
  "video",
  "code-block",
  "script",
  "code",
];

export default TextEditor;
