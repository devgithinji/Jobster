import customFetch, {checkForUnauthorizedResponse} from "../../utils/axios";
import {logoutUser} from "./userSlice";
import {clearValues} from "../job/jobSlice";
import {clearAllJobsState} from "../allJobs/allJobsSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const {data} = await customFetch.post(url, user);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data.msg)
    }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const {data} = await customFetch.post(url, user);
        return data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
        const {data} = await customFetch.patch(url, user)
        return data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
}

export const clearStoreThunk = async (message, thunkAPI) => {
    try {
        // logout user
        thunkAPI.dispatch(logoutUser(message));
        // clear jobs value
        thunkAPI.dispatch(clearAllJobsState());
        // clear job input values
        thunkAPI.dispatch(clearValues());
        return Promise.resolve();
    } catch (error) {
        // console.log(error);
        return Promise.reject();
    }
};