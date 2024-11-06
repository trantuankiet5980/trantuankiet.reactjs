import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from './bikeSlice';

export const store = configureStore({
    reducer: {
        bikes: bikeReducer,
    },
}); 