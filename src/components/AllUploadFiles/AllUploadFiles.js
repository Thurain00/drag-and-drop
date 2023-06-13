import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, Form } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function AllUploadFiles({ uploadFile, setUploadFile }) {
  const handleDelete = (del) => {
    setUploadFile(uploadFile.filter((data) => data.id !== del.id));
  };
  return (
    <Droppable droppableId="all-upload" type="group">
      {(provided) => (
        <ListGroup
          as="ol"
          className="all-upload"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {uploadFile.map((e, index) => {
            return (
              <Draggable key={e.id} draggableId={e.id} index={index}>
                {(provided) => (
                  <ListGroup.Item
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="list-row"
                    as="li"
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

export default AllUploadFiles;
