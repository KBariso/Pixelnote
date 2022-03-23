import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllNotes, getOneNote } from "../../store/notes";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import EditOneNote from "../EditNote";
import './OneNote.css'


const Note = () =>  {
    const dispatch = useDispatch();
    const id = useParams()
    const noteId = id.id
    // console.log(id.id)
    const oneNote = useSelector((state) => state.notes[noteId]);
    // console.log(oneNote)
    // const sessionNotes = useSelector(state => state.notes.id)
    // const oneNote = sessionNotes[noteId].noteId
    // const oneNote = useSelector((state) => state.notes[noteId]);
    // const noteId = useSelector(state => state.notes.id)
    const history = useHistory()


    useEffect(() => {
      dispatch(getAllNotes(noteId));
      // console.log(typeof noteId)
      // console.log("IM HERE")
    }, [dispatch, noteId]);

    const user = useSelector((state) => state.session.user?.id)
    if (!user) return <Redirect to="/home" />;
    // if (user !== noteObjId) return <Redirect to="/notes" />;
    // console.log(noteId)
    // console.log(oneNote)


      return (
        <div className="content-container">
          <EditOneNote />
      {/* <p className="content">{oneNote?.content}</p> */}
        <div>
        </div>
        {/* <NavLink className="editButton" to={`/notes/${noteId}/edit`}>Edit</NavLink> */}
        </div>
      );

}


export default Note;
