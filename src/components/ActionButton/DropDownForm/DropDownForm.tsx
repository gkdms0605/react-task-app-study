import React, { useState, type ChangeEvent, type FC } from 'react'
import { FiX } from 'react-icons/fi';
import { useTypedDispatch } from '../../../hooks/redux';
import { v4 } from 'uuid';
import { addList, addTask } from '../../../store/slices/boardsSlice';
import { addLog } from '../../../store/slices/loggerSlice';
import { button, buttons, close, input, listForm, taskForm } from './DropDownForm.css';

type TDropDownFormProps = {
  boardId: string;
  listId: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list?: boolean
}

const DropDownForm: FC<TDropDownFormProps> = ({
  boardId,
  listId,
  setIsFormOpen,
  list
}) => {
  const dispatch = useTypedDispatch();
  const [text, setText] = useState('');
  const formPlaceholder = list ?
    "리스트의 제목을 입력하세요." :
    "일의 제목을 입력하세요."

  const buttonTitle = list ?
    "리스트 추가하기" :
    "일 추가하기"

  const handleButtonClick = () => {
    if(text) {
      if(list) {
        dispatch(
          addList({
            boardId,
            list: {listId: v4(), listName: text, tasks: []}
          })
        );

        dispatch(
          addLog({
            logId: v4(),
            logMessage: "리스트 생성하기",
            logAuthor: "User",
            logTimeStamp: String(Date.now())
          })
        )
      } else {
        dispatch(
          addTask({
            boardId: boardId,
            listId: listId,
            task: {
              taskId: v4(),
              taskName:text,
              taskOwner: "User",
              taskDescription: ""
            }
          })  
        )

        dispatch(
          addLog({
            logId: v4(),
            logMessage: "일 추가하기",
            logAuthor: "User",
            logTimeStamp: String(Date.now())
          })
        )
      }
    }
  }

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  return (
    <div className={list ? listForm : taskForm}>
      <textarea
        className={input}
        value={text}
        onChange={handleTextChange}
        autoFocus
        placeholder={formPlaceholder}
        onBlur={() => setIsFormOpen(false)}
      />
      <div className={buttons}>
        <button onMouseDown={handleButtonClick} className={button}>
          {buttonTitle}
        </button>
        <FiX className={close} />
      </div>
    </div>
  )
}

export default DropDownForm