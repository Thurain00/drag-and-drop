import React, { useEffect, useState } from "react";
import "./App.css";

import Fileupload from "./components/Fileupload/Fileupload";
import FileUploadHistory from "./components/FileUploadHistory/FileUploadHistory";
import Test from "./components/Test"

function App() {
  const initialState=JSON.parse(localStorage.getItem('uploadFile'))|| [ ];
  const [uploadFile, setUploadFile] = useState(initialState);


  const uploadFileHandle = (fileUpload) => {
    setUploadFile(fileUpload);

  };
 useEffect(()=>{
   localStorage.setItem('uploadFile',JSON.stringify(uploadFile))
 },[uploadFile]);
  

  return (
    <div className="App">
       <Fileupload uploadFile={uploadFile} setUploadFile={uploadFileHandle} />

      
      {/* <FileUploadHistory
        uploadFile={uploadFile}
        setUploadFile={uploadFileHandle}
        
      />  */}
     
    <Test  uploadFile={uploadFile}
        setUploadFile={uploadFileHandle}/>

    </div>
  );
}

export default App;
