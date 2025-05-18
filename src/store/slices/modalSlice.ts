import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../../types";

type TModalState = {    //type 지정
    boardId: string;
    listId: string;
    task: ITask
}

type TSetModalDataAction = {
    boardId: string;
    listId: string;
    task: ITask;
}

const initialState : TModalState = {        // 초기 상태, TModalState임을 나타냄
    boardId: 'board-0',
    listId: 'list-0',
    task: {
        taskId: 'task-0',
        taskName: 'task 0',
        taskDescription: 'task description',
        taskOwner: 'Haeun'  
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {  // action을 생성하는 함수들
        setModalData: (state, {payload}: PayloadAction<TSetModalDataAction>) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            state.task = payload.task;
        }
    }
})  


export const {setModalData} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;