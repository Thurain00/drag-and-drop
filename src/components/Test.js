import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, Form } from "react-bootstrap";
import { useRef } from "react";

function Test({ uploadFile, setUploadFile }) {
  const [selectFile,setSelectFile]=useState([]);
  const [checkFile, setCheckFile] = useState([]);
  const dragItem = useRef();
  const dragOverItem = useRef();

  //  const handleCheck=(e)=>{
  //   console.log("checkfile:",e.target.checkFile)
  //    var updateFile=[...checkFile];
  //    if(e.target.checkFile){
  //     updateFile=[...checkFile,e.target.value];
  //    }
  //    else{
  //     updateFile.splice(checkFile.indexOf(e.target.value),1)
  //    }
  //    setCheckFile(updateFile)

  //  }

  



  const dragEnter = (e, index) => {
    dragOverItem.current = index;
    console.log("Move to:", index);
  };
  const dragStart = (e, index) => {
    dragItem.current = index;
    console.log("move from:", index);
  };
  const drop = (e) => {
    const copyFileUpload = [...uploadFile];
    const dragItemContent = copyFileUpload[dragItem.current];
    copyFileUpload.splice(dragItem.current, 1);
    copyFileUpload.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setUploadFile(copyFileUpload);
  };
  const handleDelete = (del) => {
    setUploadFile(uploadFile.filter((data) => data.id !== del.id));
  };
  return (
    <div style={{display:'flex'}}>

    <div className="sub-div">
      <div className="log-list-div  ">
        <ListGroup as="ol">
          {uploadFile.map((e, index) => {
            return (
              <ListGroup.Item
                className="list-row"
                as="li"
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                draggable
              >
                <div>
                  {/* <input  type="checkbox" onChange={handleCheck}/> */}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faPaperclip} /> {e.name}{" "}
                  </span>
                </div>
                <div className="my-Icon">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => handleDelete(e)}
                  />
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>


    <div className="sub-div">
      <div className="log-list-div  ">
        <ListGroup as="ol">
          {uploadFile.map((e, index) => {
            return (
              <ListGroup.Item
                className="list-row"
                as="li"
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                key={index}
                draggable
              >
                <div>
                  {/* <input  type="checkbox" onChange={handleCheck}/> */}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faPaperclip} /> {e.name}{" "}
                  </span>
                </div>
                <div className="my-Icon">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => handleDelete(e)}
                  />
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>

    </div>
  );
}

export default Test;
