import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Note from "../OneNote";
import "./AllNotes.css"
import EditOneNote from "../EditNote";

const NoteListDetail = ({ id, userId, notebookId, title, content, createdAt, updatedAt}) => {
  const [selectedNote, setSelectedNote] = useState()
  const user = useSelector((state) => state.session.user?.id)
  // const { id } = useParams()

  if (!user) return <Redirect to="/home" />;


  return (
    <>
    {/* <h1>Notes</h1> */}

      <NavLink className="note" to={`/notes/${id}`}>
        <h3 className="notesList" onClick={()=>setSelectedNote(id)}>{title}</h3>
      </NavLink>
      {/* <p>{content}</p> */}
      {/* {selectedNote &&
        <Note noteId={selectedNote} clickHandler={()=>{setSelectedNote(null)}}/>
      } */}
      {/* <Note /> */}
      {/* <h1>{oneNote?.content}</h1> */}


    </>

  );
};

export default NoteListDetail;
