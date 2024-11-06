import { combineReducers } from '@reduxjs/toolkit';
import notesSlice from '../slices/notesSlice';

const rootReducer = combineReducers({
  notesData: notesSlice,
});

export default rootReducer;