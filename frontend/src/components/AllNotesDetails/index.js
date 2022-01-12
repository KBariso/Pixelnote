
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import Note from "../OneNote";

const NoteListDetail = ({ id, userId, notebookId, title, content, createdAt, updatedAt}) => {
  const [selectedNote, setSelectedNote] = useState()

  return (
    <div>
      <NavLink to={`/notes/${id}`}>
        <h3 onClick={()=>setSelectedNote(id)}>{title}</h3>
      </NavLink>
      {/* <p>{content}</p> */}
      {/* {selectedNote &&
        <Note noteId={selectedNote} clickHandler={()=>{setSelectedNote(null)}}/>
      } */}
      {/* <h1>{oneNote?.content}</h1> */}
    </div>
  );
};

export default NoteListDetail;
