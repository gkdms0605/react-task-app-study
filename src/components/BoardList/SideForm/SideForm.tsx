import React, { useState, type ChangeEvent, type FC } from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideForm } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardsSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

type TSideFormProps = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: FC<TSideFormProps> = ({ setIsFormOpen, inputRef}) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useTypedDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handelOnBlur = () => {
    setIsFormOpen(false);
  };

  const handleClick = () => {
    if (inputText) {
      dispatch(
        addBoard({
          board: { boardId: uuidv4(), boardName: inputText, lists: [] },
        })
      );
    }

    dispatch(
      addLog({
        logId: uuidv4(),
        logMessage: `게시판 등록: ${inputText}`,
        logAuthor: "User",
        logTimeStamp: String(Date.now())
      })
    )
  };

  return (
    <div className={sideForm}>
      <input
        // ref = {inputRef}  // auroFocus와 같음
        autoFocus
        className={input}
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handelOnBlur}
      />
      <FiCheck className={icon} onMouseDown={handleClick}/>
      {/* 이벤트 동작 순서: blur, onMouseDown, mouseUp, click */}
      
    </div>
  );
};

export default SideForm;
