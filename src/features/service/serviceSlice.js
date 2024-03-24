import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getServices} from "src/services/service/service";

export const initialState = {
    data: null,
    msg: null,
    status: ""
};

export const servicesAsync = createAsyncThunk('services', getServices);


export const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setServices: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(servicesAsync.pending, state => {
                state.status = "pending";
            })
            .addCase(servicesAsync.fulfilled, (state, action) => {
                state.data = action.payload.result.data;
                state.msg = action.payload.msg;
            })
    },
});

export const allServices = (state) => state.service.data;

export default servicesSlice.reducer;
