import { createSlice } from "@reduxjs/toolkit";

const toolKitSlice = createSlice({
    name: "hotel",
    initialState: {
        roomsList: [],
        accountList: {},
        userInfo: {},
    },
    reducers:{
        addRoomsList(state, action){
            state.roomsList = action.payload //.push(action.payload)
        },
        addAccountslList(state, action){
            state.accountList = action.payload
        },
        // addUserInfo(state, action){
        //     state.userInfo = action.payload
        // },
    }
})

export default toolKitSlice.reducer;
export const {addRoomsList, addAccountslList, addUserInfo} = toolKitSlice.actions;