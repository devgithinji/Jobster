import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
    isLoading: false, user: null
}

export const registerUser = createAsyncThunk('user/registerUser', async (user, thunkAPI) => {
    try {
        const {data} = await customFetch.post('/auth/register', user);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.message)
    }
})

export const loginUser = createAsyncThunk('user/loginUser', async (user, thunkAPI) => {
    console.log(`login ${JSON.stringify(user)}`)
})


const userSlice = createSlice({
    name: 'user', initialState, extraReducers: {}
})


export default userSlice.reducer