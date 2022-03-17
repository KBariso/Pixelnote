import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneNotebook } from "../store/notebooks";
import './OneNoteBookDetails.css'




const OneNotebookDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    // const title = useParams()
    // console.log(notebooksProp[id])


    const notebooksObj = useSelector((state) => state.notebooks);
    console.log(notebooksObj)
    const notebooks = Object.values(notebooksObj)
    console.log(notebooksObj[id])
    // const notebook = notebooks[id]
    // console.log(notebook)
    // const notebookObj = Object.values(notebook)
    // console.log(notebookObj)
    const notesObj = useSelector((state) => state.notes);
    const notes = Object.values(notesObj);
    // console.log(notes[0])

    console.log(id)

    const noteBookNotes = notes.filter((note) => note.notebookId == id)
    // console.log(noteBookNotes)

    useEffect(() => {
        dispatch(getOneNotebook(id));
      }, [dispatch, id]);



    return (
        <>
        <div className="NotebookNotesContainer">
        <h1></h1>
        {noteBookNotes.map((note) => {
            return (
                <ul>
                <NavLink className="NotebookNotesLinkContainer" to={`/notes/${note.id}`}>
                    <li className="NoteBookNotes">{note.title}</li>
                </NavLink>
                </ul>

            )
        })}

        </div>



        </>
    )
}

export default OneNotebookDetails
