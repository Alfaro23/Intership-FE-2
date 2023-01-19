import { combineReducers, configureStore} from "@reduxjs/toolkit";
import toolKitSlice from "./toolkitReducer";

const rootReducer = combineReducers({
   toolkit: toolKitSlice
})

export const store = configureStore({
    reducer: rootReducer,

})