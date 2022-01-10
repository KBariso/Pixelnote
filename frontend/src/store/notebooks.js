import { csrfFetch } from "./csrf";

const GET_ALL_NOTEBOOKS = "notebooks/GET_ALL_NOTEBOOKS"



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


const initialState = {}
const notebookReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
      case GET_ALL_NOTEBOOKS:
        action.notebooks.forEach((notebook) => {
          newState[notebook.id] = notebook;
        });
        return { ...state, ...newState };
      default:
        return state;
    }
  };

  export default notebookReducer;
