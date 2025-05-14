import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../store";

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>(); 

// interface Obj<T> {
//     name: T
// }

// interface State {
//     state: {
//         data: string;
//         loading: boolean
//     }
// }

// const obj : Obj<State> = {
//     name: {
//         state: {
//             data: 'abcd',
//             loading: false
//         }
//     }
// }