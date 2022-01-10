import { csrfFetch } from "./csrf";

const GET_ALL_NOTEBOOKS = "notebooks/GET_ALL_NOTEBOOKS";
const GET_ONE_NOTEBOOK = "notebooks/GET_ONE_NOTEBOOK";

const loadAllNotebooks = (notebooks) => ({
  type: GET_ALL_NOTEBOOKS,
  notebooks,
});

//helps connect from front end to backend
export const getAllNotebooks = () => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks`);
  if (res.ok) {
    const notebooks = await res.json();
    dispatch(loadAllNotebooks(notebooks));
    return notebooks;
  }
};

const loadOneNotebook = (notebook) => ({
  type: GET_ONE_NOTEBOOK,
  notebook,
});

export const getOneNotebook = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/notebooks/${id}`);
  if (res.ok) {
    const notebooks = await res.json();
    dispatch(loadOneNotebook(notebooks));
    return notebooks;
  }
};

const initialState = {};
const notebookReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case GET_ALL_NOTEBOOKS:
      action.notebooks.forEach((notebook) => {
        newState[notebook.id] = notebook;
      });
      return { ...state, ...newState };
    case GET_ONE_NOTEBOOK:
      newState[action.notebook.id] = action.notebook;
      return { ...state, ...newState };
    default:
      return state;
  }
};

export default notebookReducer;
