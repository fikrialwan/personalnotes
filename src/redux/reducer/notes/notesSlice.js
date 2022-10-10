import { createSlice } from '@reduxjs/toolkit'
import { getInitialData } from '../../../utils'

const initialState = {
  search: '',
  title: '',
  note: '',
  notes: getInitialData(),
}

export const notesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    submitNotes: (state) => {
      state.value = {
        ...state.value,
        notes: [
          ...state.value.notes,
          {
            id: +new Date(),
            title: this.state.title,
            body: this.state.note,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
        title: '',
        note: '',
      }
    },
    search: (state, action) => {
      state.value = {
        ...state.value,
        search: action.searchValue,
      }
    },
    changeTitle: (state, action) => {
      if (action.titleValue.length <= 50) {
        state.value = {
          ...state.value,
          title: action.titleValue,
        }
      }
    },
    changeNotes: (state, action) => {
      state.value = {
        ...state.value,
        note: action.noteValue,
      }
    },
    deleteNote: (state, action) => {
      state.value = {
        ...state.value,
        notes: state.value.notes.filter((item) => item.id !== action.id),
      }
    },
    toArchived: (state, action) => {
      state.value = {
        ...state.value,
        notes: state.value.notes.map((item) => (item.id === action.id) ? { ...item, archived: true } : item)
      }
    },
    toNotArchived: (state, action) => {
      state.value = {
        ...state.value,
        notes: state.value.notes.map((item) => (item.id === action.id) ? { ...item, archived: false } : item)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { submitNotes, search, changeTitle, changeNotes, deleteNote, toArchived, toNotArchived } = notesSlice.actions

export default notesSlice.reducer