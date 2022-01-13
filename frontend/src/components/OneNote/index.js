import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneNote } from "../../store/notes";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";

import './OneNote.css'


const Note = () =>  {
    const dispatch = useDispatch();
    const {id} = useParams()
    const oneNote = useSelector((state) => state.notes[id]);
    // console.log(oneNote)
    // const sessionNotes = useSelector(state => state.notes.id)
    // const oneNote = sessionNotes[noteId].noteId
    // const oneNote = useSelector((state) => state.notes[noteId]);


    useEffect(() => {
      dispatch(getOneNote(id));
      // console.log(typeof noteId)
      // console.log("IM HERE")
    }, [dispatch, id]);

    const user = useSelector((state) => state.session.user?.id)
    if (!user) return <Redirect to="/login" />;
    // console.log(noteId)
    // console.log(oneNote)

      return (
        <div>
      <p>{oneNote?.content}</p>
        <div>
        </div>


        </div>
      );

}


export default Note;
