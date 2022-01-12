import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneNote } from "../../store/notes";

import './OneNote.css'


const Note = ({noteId}) =>  {
    const dispatch = useDispatch();
    const {id} = useParams()
    const oneNote = useSelector((state) => state.notes[id]);
    // console.log(oneNote)
    // const sessionNotes = useSelector(state => state.notes.id)
    // const oneNote = sessionNotes[noteId].noteId
    // const oneNote = useSelector((state) => state.notes[noteId]);


    useEffect(() => {
      dispatch(getOneNote(id));
      console.log(typeof noteId)
      console.log("IM HERE")
    }, [dispatch, id]);

    // console.log(noteId)
    // console.log(oneNote)

      return (
        <div>
         <h1>{oneNote.content}</h1>
        </div>
      );

}


export default Note;
