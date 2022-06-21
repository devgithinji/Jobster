import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})