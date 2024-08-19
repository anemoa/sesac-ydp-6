import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
    name: 'money',
    initialState: {money: 0},
    reducers: {
        plus: (state) => {
            state.money += 1;
        },
        minus: (state) => {
            state.money -= 1;
        }
    }
});