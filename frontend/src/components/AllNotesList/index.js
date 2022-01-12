import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllNotes } from "../../store/notes";
import NoteListDetail from "../AllNotesDetails";
// import Note from "../OneNote";
import "./AllNotes.css";

const NotesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  const user = useSelector((state) => state.session?.user?.id);
  const notesObj = useSelector((state) => state.notes);
  const notes = Object.values(notesObj);
  // console.log(user)
  const userNotes = notes.filter((note) => note.userId === user);

  return (
    <div>
      <div>
        {userNotes.map((note) => {
          console.log(note.id);
          return (
            <NoteListDetail
              id={note.id}
              userId={note.userId}
              notebookId={note.notebookId}
              title={note.title}
              content={note.content}
              createdAt={note.createdAt}
              updatedAt={note.updatedAt}
            />
          );
        })}
      </div>
      <div>
        <NavLink to="/notes/new">New Note</NavLink>
      </div>
    </div>
  );
};

export default NotesList;
