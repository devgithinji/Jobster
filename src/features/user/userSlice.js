import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import {toast} from "react-toastify";
import {addUserToLocalStorage, getUserFromLocalStorage} from "../../utils/localStorage";

const initialState = {
    isLoading: false, user: getUserFromLocalStorage()
}

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    try {
        const {data} = await customFetch.post('/auth/register', user);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data.msg)
    }
})

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    try {
        const {data} = await customFetch.post('/auth/login', user);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data.msg)
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, {payload}) => {
            const {user} = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user)
            toast.success(`Hello There ${user.name}`)
        },
        [registerUser.rejected]: (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, {payload}) => {
            const {user} = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user)
            toast.success(`Welcome Back ${user.name}`)
        },
        [loginUser.rejected]: (state, {payload}) => {
            state.isLoading = false;
            toast.error(payload)
        }
    }
})


export default userSlice.reducer