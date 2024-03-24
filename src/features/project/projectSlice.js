import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getProjects} from "src/services/project/project";

export const initialState = {
    data: null,
    msg: null,
    status: ""
};

export const projectsAsync = createAsyncThunk('projects', getProjects);

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(projectsAsync.pending, state => {
                state.status = "pending";
            })
            .addCase(projectsAsync.fulfilled, (state, action) => {
                state.data = action.payload.result.data;
                state.msg = action.payload.msg;
            })
    },
});

export const allProjects = (state) => state.project.data;

export default projectsSlice.reducer;
