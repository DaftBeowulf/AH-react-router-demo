import axios from "axios";

const url = "https://fsw14-lambda-notes.herokuapp.com/api/notes";

// store string literals
export const FETCH_NOTES_START = "FETCH_NOTES_START";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAIL = "FETCH_NOTES_FAIL";
// define actions
export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES_START });
  axios
    .get(url)
    .then(res => dispatch({ type: FETCH_NOTES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_NOTES_FAIL, payload: err }));
};

export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAIL = "ADD_NOTE_FAIL";

export const addNote = newNote => dispatch => {
  dispatch({ type: ADD_NOTE_START });
  axios
    .post(url, newNote)
    .then(res => dispatch({ type: ADD_NOTE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_NOTE_FAIL, payload: err }));
};

export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAIL = "DELETE_NOTE_FAIL";

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE_START });

  axios
    .delete(`${url}/${id}`)
    .then(res => dispatch({ type: DELETE_NOTE_SUCCESS, payload: id }))
    .catch(err => dispatch({ type: DELETE_NOTE_FAIL, payload: err }));
  // console.log(id);
};

export const EDIT_NOTE_START = "EDIT_NOTE_START";
export const EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS";
export const EDIT_NOTE_FAIL = "EDIT_NOTE_FAIL";

export const editNote = (id, editedNote) => dispatch => {
  dispatch({ type: EDIT_NOTE_START });

  axios
    .put(`${url}/${id}`, editedNote)
    .then(res => dispatch({ type: EDIT_NOTE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: EDIT_NOTE_FAIL, payload: err }));
};
