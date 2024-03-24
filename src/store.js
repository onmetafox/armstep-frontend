import  { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './features/service/serviceSlice';
import projectReducer from './features/project/projectSlice';

const store = configureStore({
    reducer:{
        service: serviceReducer,
        project: projectReducer
    }
})

export default store;