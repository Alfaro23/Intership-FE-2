import { createSlice } from "@reduxjs/toolkit";

const toolKitSlice = createSlice({
    name: "hotel",
    initialState: {
        hotelList: []
    },
    reducers:{
        addHotelList(state, action){
            state.hotelList.push(action.payload)
        }
    }
})

export default toolKitSlice.reducer;
export const {addHotelList} = toolKitSlice.actions;