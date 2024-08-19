import { createSlice } from "@reduxjs/toolkit"
const isVisibleSlice = createSlice({
    name: 'isVisible',
    initialState: true,
    reducers: {
        // 상태를 반전시키는 액션
        changeVisibility: (state) => {
            return !state; // 상태 반전
        }
    }
});

export const {changeVisibility} = isVisibleSlice.actions;
export default isVisibleSlice.reducer;