import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneNote } from "../../store/notes";
import NoteDetails from "../OneNoteDetails"
import { useParams } from "react-router-dom";

import './OneNote.css'


const Note = (noteId) =>  {
    const dispatch = useDispatch();
    const oneNote = useSelector((state) => state.notes[noteId.noteId]);

    useEffect(() => {
      dispatch(getOneNote(noteId));
      console.log("I am here")
    }, [dispatch, noteId]);
    console.log(noteId)
    console.log(oneNote)

      // const note = useSelector((state) => state.note.id);
    //   const note = note?.userId
      // const userNotes = notes.filter((note) => note.userId === user);
      return (
        <div>
         <h1>{oneNote.content}</h1>
        </div>
      );

}


export default Note;
