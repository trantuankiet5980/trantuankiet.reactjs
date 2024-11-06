import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    fetchNotesStart: (state) => {
      state.loading = true;
    },
    fetchNotesSuccess: (state, action) => {
      state.items = action.payload;  // Sử dụng state.items để load data
      state.loading = false;
    },
    fetchNotesFailure: (state) => {
      state.loading = false;
    },
    searchNotes: (state, action) => { // Đơn giản hóa searchNotes nếu chưa cần tìm kiếm
      state.searchResult = state.items.filter(note => 
        note.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
});

export const { fetchNotesStart, fetchNotesSuccess, fetchNotesFailure, searchNotes } = notesSlice.actions;
export default notesSlice.reducer;
