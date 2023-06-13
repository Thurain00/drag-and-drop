import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faXmark } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function SelectedUploadFiles({ uploadFile, setUploadFile,selectUploadFile }) {
 

  const handleDelete = (del) => {
    setUploadFile(uploadFile.filter((data) => data.id !== del.id));
  };
  return (
    
    <Droppable droppableId="selectfile" type="group">
        {(provided)=>(
         
        <ListGroup
          as="ol"
          className="selectfile"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {selectUploadFile.map((e, index) => {
            return (
              <Draggable
              key={e.id}
              draggableId={e.id}
              index={index}
              >
                {(provided)=>(
                  <ListGroup.Item
                    className="list-row"
                    as="li"
                    {...provided.draggableProps}
                     {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <div className="list-item">
                      <div>
                        <p>
                          {" "}
                          <FontAwesomeIcon icon={faPaperclip} /> {e.name}{" "}
                        </p>
                      </div>
                      <div className="my-Icon">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={() => handleDelete(e)}
                        />
                      </div>
                    </div>

                  </ListGroup.Item>
                  )}
                  </Draggable>
            );
          })}
          {provided.placeholder}
        </ListGroup>
   
         )}
        </Droppable>
        
  );
}

export default SelectedUploadFiles;
