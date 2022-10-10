import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './reducer/notes/notesSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});