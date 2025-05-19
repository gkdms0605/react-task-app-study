import React, { type FC } from "react";
import { container, description, title } from "./Task.css";
import { Draggable } from "@hello-pangea/dnd";

type TTaskProps = {
  index: number;
  id: string;
  boardId: string;
  taskName: string;
  taskDescription: string;
};

const Task: FC<TTaskProps> = ({
  index,
  id,
  boardId,
  taskName,
  taskDescription,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(proviede) => (
        <div ref={proviede.innerRef} {...proviede.dragHandleProps} {...proviede.draggableProps}
        className={container}>
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
