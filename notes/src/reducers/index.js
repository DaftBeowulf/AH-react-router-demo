// import actions
import {
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAIL,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAIL
} from "../actions";

// set initial state
const initialState = {
  notes: [],
  fetching: false,
  error: null,

  creatingNote: false,
  deletingNote: false,
  editingNote: false
};

// declare reducer
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch notes -- Read
    case FETCH_NOTES_START:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: [...state.notes, ...action.payload],
        fetching: false
      };
    case FETCH_NOTES_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    //add a newNote -- Create
    case ADD_NOTE_START:
      return {
        ...state,
        creatingNote: true,
        error: null
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        notes: [...state.notes, ...action.payload],
        creatingNote: false
      };
    case ADD_NOTE_FAIL:
      return {
        ...state,
        creatingNote: false,
        error: action.payload
      };

    //delete a note
    case DELETE_NOTE_START:
      return {
        ...state,
        deletingNote: true,
        error: null
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
        deletingNote: false
      };
    case DELETE_NOTE_FAIL:
      return {
        ...state,
        deletingNote: false,
        error: action.payload
      };

    //update existing note
    case EDIT_NOTE_START:
      return {
        ...state,
        editingNote: true,
        error: null
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? action.payload : note
        ),
        editingNote: false
      };
    case EDIT_NOTE_FAIL:
      return {
        ...state,
        editingNote: false,
        error: action.payload
      };

    default:
      return state;
  }
};
