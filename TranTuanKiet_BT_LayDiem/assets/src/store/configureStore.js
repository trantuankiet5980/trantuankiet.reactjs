import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducersToolkit/index';

const store = configureStore({
  reducer: rootReducer,
});
