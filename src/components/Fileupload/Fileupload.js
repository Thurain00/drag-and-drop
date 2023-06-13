import React from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../Fileupload/Fileupload.css";

function Fileupload({ uploadFile, setUploadFile }) {
  const hiddenFileInput = React.useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      setUploadFile((preUpload) => [
        ...preUpload,
        { id: uuidv4(), name: e.dataTransfer.files[i].name },
        
      ]);
    }
  };

  const onChangeHandler = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
 
      setUploadFile((preUpload) => [
        ...preUpload,
        { id: uuidv4(), name: e.target.files[i].name },
      ]);

    }   
  };
  

  const onHandleClick = (event) => {
    hiddenFileInput.current.click();
    hiddenFileInput.current.value = null;
  };

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h3>File upload</h3>
        <div>
          <input
            type="file"
            ref={hiddenFileInput}
            multiple
            hidden
            onChange={onChangeHandler}
          />
        </div>

        <div className="dropzone-content">
          <p>Drag file here to upload </p>
          <p>or</p>
          <Button variant="outline-primary" onClick={onHandleClick}>
            Select
          </Button>
        </div>
      </div>
    </>
  );
}

export default Fileupload;
