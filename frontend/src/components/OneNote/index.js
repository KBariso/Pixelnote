import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneNote } from "../../store/notes";

import './OneNote.css'


const Note = ({noteId}) =>  {
    const dispatch = useDispatch();
    // const sessionNotes = useSelector(state => state.notes.id)
    // const oneNote = sessionNotes[noteId].noteId
    const oneNote = useSelector((state) => state.notes[noteId].id);

    useEffect(() => {
      dispatch(getOneNote(noteId));
      console.log(typeof noteId)
      console.log("IM HERE")
    }, [dispatch, noteId]);
    console.log(noteId)
    console.log(oneNote)


      return (
        <div>
         <h1>{oneNote.content}</h1>
        </div>
      );

}


export default Note;
