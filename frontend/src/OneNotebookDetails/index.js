import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './OneNoteBookDetails.css'




const OneNotebookDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams()


    const notebooksObj = useSelector((state) => state.notebooks);
    const notebooks = Object.values(notebooksObj)
    // console.log(notebooks[0])
    const notesObj = useSelector((state) => state.notes);
    const notes = Object.values(notesObj);
    // console.log(notes[0])

    // console.log(id)

    const noteBookNotes = notes.filter((note) => note.notebookId == id)
    console.log(noteBookNotes)





    return (
        <>
        <div className="NotebookNotesContainer">
        {/* <h1>Hello I am here</h1> */}
        {noteBookNotes.map((note) => {
            return (
                <ul>
                    <li className="NoteBookNotes">{note.title}</li>
                </ul>
            )
        })}

        </div>



        </>
    )
}

export default OneNotebookDetails
