
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneNote } from "../../store/notes";
import NoteDetails from "../OneNoteDetails"
import { useParams } from "react-router-dom";
import { useState } from "react";
import Note from "../OneNote";

const NoteListDetail = ({ id, userId, notebookId, title, content, createdAt, updatedAt}) => {
  const [selectedNote, setSelectedNote] = useState()

  return (
    <div>
      <NavLink to={`/user/notes/${id}`}>
        <h3 onClick={()=>setSelectedNote(id)}>{title}</h3>
      </NavLink>
      <p>{content}</p>
      {selectedNote &&
        <Note noteId={selectedNote} clickHandler={()=>{setSelectedNote(null)}}/>
      }
    </div>
  );
};

export default NoteListDetail;
