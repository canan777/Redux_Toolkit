import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import crudSlice from "./slices/crudSlice";

// configureStore - createStore farkları
// 1- varsayılan olarak thunk kurulu gelir
// 2- verilen reducer'ları otomatik olarak birleştirir
export default configureStore({
    reducer: { counterSlice , crudSlice},
    
});