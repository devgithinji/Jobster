import customFetch, {checkForUnauthorizedResponse} from "../../utils/axios";
import {clearValues} from "./jobSlice";
import {getAllJobs, hideLoading, showLoading} from "../allJobs/allJobsSlice";

export const createJobThunk = async (job, thunkAPI) => {
    try {
        await customFetch.post('/jobs', job);
        thunkAPI.dispatch(clearValues());
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
        const {data} = await customFetch.delete(`/jobs/${jobId}`);
        thunkAPI.dispatch(getAllJobs());
        return data.msg;
    } catch (e) {
        thunkAPI.dispatch(hideLoading());
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const editJobThunk = async ({jobId, job}, thunkAPI) => {
    try {
        const {data} = await customFetch.patch(`/jobs/${jobId}`, job);
        thunkAPI.dispatch(clearValues());
        return data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};