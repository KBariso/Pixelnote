import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneNotebook } from "../../store/notebooks";
import "./OneNoteBookDetails.css";

const OneNotebookDetails = () => {
  // console.log(title)
  const dispatch = useDispatch();
  const { id } = useParams();
  // const title = useParams()
  // console.log(notebooksProp[id])

  const notebooksObj = useSelector((state) => state.notebooks);
  // console.log(notebooksObj);
  const notebooks = Object.values(notebooksObj);
  // console.log(notebooksObj[id])
  // const notebook = notebooks[id]
  // console.log(notebook)
  // const notebookObj = Object.values(notebook)
  // console.log(notebookObj)
  const notesObj = useSelector((state) => state.notes);
  const notes = Object.values(notesObj);
  // console.log(notes[0])

  // console.log(id)

  const noteBookNotes = notes.filter((note) => note.notebookId == id);
  // console.log(noteBookNotes)
  const notebookName = notebooks.filter((notebook) => notebook.id == id);
  // console.log(notebookName[0])

  // useEffect(() => {
  //     dispatch(getOneNotebook(id));
  //   }, [dispatch, id]);

  return (
    <>
      <div className="NotebookNotesContainer">
        {notebookName.map((notebook) => {
          return <h1 className="NotebookTitle">{notebook.title}</h1>;
        })}
        {noteBookNotes.map((note) => {
          return (
            <>
              {/* <h1>huuu</h1> */}
              {/* <ul> */}
                <NavLink
                  className="NotebookNotesLinkContainer"
                  style={{ textDecoration: 'none' }}
                  to={`/notes/${note.id}`}
                >
                  <p className="NoteBookNotes"> {'>'} {note.title}</p>
                </NavLink>
              {/* </ul> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default OneNotebookDetails;
