import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faXmark } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../FileUploadHistory/FileUploadHistory.css";
import SelectedUploadFiles from "../SelectedUploadFiles/SelectedUploadFiles";
import AllUploadFiles from "../AllUploadFiles/AllUploadFiles";
import uuid from "react-uuid";

function FileUploadHistory({ uploadFile, setUploadFile }) {
  const [selectUploadFile, setSelectUploadFile] = useState([
    {id:uuid(), name:''}
  ]);
  const [test,setTest]=useState([])

  
  
  
  const handleDragDrop = (results) => {
   
    const { source, destination, type } = results;
    console.log(results)
    if (!destination){
      return};
    if (  source.index === destination.index)
      return;

     

    if (source.droppableId === destination.droppableId) {
      const reorderedUploadFiles = [...uploadFile];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;
      const [removeFileUpload] = reorderedUploadFiles.splice(sourceIndex, 1);
      reorderedUploadFiles.splice(destinationIndex, 0, removeFileUpload);
      // setSelectUploadFile((preState)=>[...preState,removeFileUpload])
      setUploadFile(reorderedUploadFiles);
      
    }
    else{
      console.log("hi there")
    }
    
   
    
    
  };

 
  const handleDelete = (del) => {
    setUploadFile(uploadFile.filter((data) => data.id !== del.id));
  };
  return (
    <>
    <DragDropContext onDragEnd={handleDragDrop}>
  <div className="sub-div">
    <h3>Your uploaded files</h3>
  <div className="log-list-div  "> 
  <AllUploadFiles uploadFile={uploadFile} setUploadFile ={setUploadFile} />
  </div>
  </div>

  
  <div className="sub-div">
    <h3>Select uploaded files</h3>
  
<SelectedUploadFiles uploadFile={uploadFile} setUploadFile ={setUploadFile} selectUploadFile={selectUploadFile}/>

  </div>
  </DragDropContext>
  </>
    
    
    // <div>
    //   <div className="sub-div">
    //     <h3>Your uploaded files</h3>
    //     <div className="log-Status">
    //       {uploadFile === undefined || uploadFile.length === 0 ? (
    //         <div>
    //           <p>No file upload</p>
    //         </div>
    //       ) : (
    //         <div className="log-list-div">
    //           <DragDropContext onDragEnd={handleDragDrop} >
    //             <div>
    //             <Droppable droppableId="characters" type="group">
    //               {(provided) => (
    //                 <ListGroup
    //                   as="ol"
    //                   className="characters"
    //                   {...provided.droppableProps}
    //                   ref={provided.innerRef}
    //                 >
    //                   {uploadFile.map((e, index) => {
    //                     return (
    //                       <Draggable
    //                         key={e.id}
    //                         draggableId={e.id}
    //                         index={index}
    //                       >
    //                         {(provided) => (
    //                           <ListGroup.Item
    //                             {...provided.draggableProps}
    //                             {...provided.dragHandleProps}
    //                             ref={provided.innerRef}
    //                             className="list-row"
    //                             as="li"
    //                           >
    //                             <div className="list-item">
    //                               <div>
    //                                 <p>
    //                                   {" "}
    //                                   <FontAwesomeIcon
    //                                     icon={faPaperclip}
    //                                   />{" "}
    //                                   {e.name}{" "}
    //                                 </p>
    //                               </div>
    //                               <div className="my-Icon">
    //                                 <FontAwesomeIcon
    //                                   icon={faXmark}
    //                                   onClick={() => handleDelete(e)}
    //                                 />
    //                               </div>
    //                             </div>
    //                           </ListGroup.Item>
    //                         )}
    //                       </Draggable>
    //                     );
    //                   })}
    //                 </ListGroup>
    //               )}
    //             </Droppable>
    //             </div>
    //             <div>
    //             <Droppable droppableId="A" type="group">
    //               {(provided) => (
    //                 <ListGroup
    //                   as="ol"
    //                   className="A"
    //                   {...provided.droppableProps}
    //                   ref={provided.innerRef}
    //                 >
    //                   {selectUploadFile.map((e, index) => {
    //                     return (
    //                       <Draggable
    //                         key={e.id}
    //                         draggableId={e.id}
    //                         index={index}
    //                       >
    //                         {(provided) => (
    //                           <ListGroup.Item
    //                             {...provided.draggableProps}
    //                             {...provided.dragHandleProps}
    //                             ref={provided.innerRef}
    //                             className="list-row"
    //                             as="li"
    //                           >
    //                             <div className="list-item">
    //                               <div>
    //                                 <p>
    //                                   {" "}
    //                                   <FontAwesomeIcon
    //                                     icon={faPaperclip}
    //                                   />{" "}
    //                                   {e.name}{" "}
    //                                 </p>
    //                               </div>
    //                               <div className="my-Icon">
    //                                 <FontAwesomeIcon
    //                                   icon={faXmark}
    //                                   onClick={() => handleDelete(e)}
    //                                 />
    //                               </div>
    //                             </div>
    //                           </ListGroup.Item>
    //                         )}
    //                       </Draggable>
    //                     );
    //                   })}
    //                 </ListGroup>
    //               )}
    //             </Droppable>
    //             </div>
    //           </DragDropContext>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
}

export default FileUploadHistory;
