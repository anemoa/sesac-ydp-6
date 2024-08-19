// [Toolkit 사용]
import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { toggleState } from "./counterSlice"; // counterReducer를 import // 가지고 올 때 변수 이름은 자기 마음대로 해도 됨.
// import isVisibleReducer from "../../../32-redux/src/store/is VisibleReducer";

// #2. store 생성
// - configureStore를 사용하여 스토어 생성

// * configureStore *
// - Redux Toolkit에서 제공하는 함수로, 스토어를 더 쉽게 설정할 수 있게 해줌


const store = configureStore({
    reducer: {
        counter: counterReducer,
        // isVisible: isVisibleReducer,
    }
});

export default store;