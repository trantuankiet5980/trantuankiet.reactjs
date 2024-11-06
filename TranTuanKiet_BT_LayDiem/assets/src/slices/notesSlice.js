// slices/notesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadNotes = createAsyncThunk(
  'notes/loadNotes',
  async () => {
    const response = await fetch('https://64571b781a4c152cf97b4a06.mockapi.io/kiet');
    const data = await response.json();
    console.log('API Data:', data); // Kiểm tra dữ liệu từ API
    return data;
  }
);


const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [],
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterNotes: (state, action) => {
      state.searchResults = state.items.filter(note =>
        note.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadNotes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.searchResults = action.payload;
        state.loading = false;
      })
      .addCase(loadNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { filterNotes } = notesSlice.actions;
export default notesSlice.reducer;
