import { csrfFetch } from "./csrf";

const GET_ALL_NOTES = "notes/GET_ALL_NOTES";

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

const initialState = {};
const notesReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_ALL_NOTES:
      action.notes.forEach((note) => {
        newState[note.id] = note;
      });
      return { ...state, ...newState };
    default:
      return state;
  }
};

export default notesReducer;
