import { csrfFetch } from "./csrf";

const GET_ALL_NOTES = "notes/GET_ALL_NOTES";
const GET_ONE_NOTE = "notes/GET_ONE_NOTE";
const ADD_ONE_NOTE = "notes/ADD_ONE_NOTE";
const EDIT_ONE_NOTE = "notes/EDIT_ONE_NOTE";
const DELETE_ONE_NOTE = "notes/DELETE_ONE_NOTE";

const loadAllNotes = (notes) => ({
  type: GET_ALL_NOTES,
  notes,
});

//helps connect from front end to backend
export const getAllNotes = () => async (dispatch) => {
  const res = await csrfFetch(`/api/notes`);
  if (res.ok) {
    const notes = await res.json();
    dispatch(loadAllNotes(notes));
    return notes;
  }
};


const loadOneNote = (note) => ({
  type: GET_ONE_NOTE,
  note,
});

export const getOneNote = (id) => async (dispatch) => {
  // console.log(id)
  const res = await csrfFetch(`/api/notes/${id}`);
  if (res.ok) {
    const note = await res.json();
    dispatch(loadOneNote(note));
    return note;
  }
}

const createOneNote = (note) => ({
  type: ADD_ONE_NOTE,
  note,
})

export const createNewNote = (note) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  if (res.ok) {
    const note = await res.json();
    dispatch(createOneNote(note));
    return note;
  }
}


const updateNote = (note) => ({
  type: EDIT_ONE_NOTE,
  note,
})

export const editNote = ({noteId, title, content, createdAt, updatedAt}) => async (dispatch) => {
  // console.log(id)
  const res = await csrfFetch(`/api/notes/${noteId}/edit`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({noteId, title, content, createdAt, updatedAt})
  });
  if (res.ok) {
    const updatedNote = await res.json();
    dispatch(updateNote(updatedNote));
  }
}

const deleteOneNote = (noteId) => ({
  type: DELETE_ONE_NOTE,
  noteId,
})

export const deleteNote = ({ userId, noteId }) => async (dispatch) => {
  const res = await csrfFetch(`/api/notes/${noteId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ noteId })
  });
  if (res.ok) {
    const deletedNote = await res.json();
    dispatch(deleteOneNote(deletedNote));
  }
}




const initialState = {};
const notesReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_ALL_NOTES:
      action.notes.forEach((note) => {
        newState[note.id] = note;
      });
      return { ...state, ...newState };
    case GET_ONE_NOTE:
      newState[action.note.id] = action.note;
      return { ...state, ...newState };
    case ADD_ONE_NOTE:
      return {...state, [action.note.id]: action.note}
    case EDIT_ONE_NOTE:
      return {...state, [action.note.id]: action.note}
    case DELETE_ONE_NOTE:
      newState = {...state};
      delete newState[action.noteId];
      return {newState}
    default:
      return state;
  }
};

export default notesReducer;
