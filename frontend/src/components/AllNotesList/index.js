import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { getAllNotes } from "../../store/notes";
import NoteListDetail from "../AllNotesDetails";
import EditOneNote from "../EditNote";
// import Note from "../OneNote";
import Note from "../OneNote";
import "./AllNotesList.css";

const NotesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  const user = useSelector((state) => state.session?.user?.id);
  const notesObj = useSelector((state) => state.notes);
  const notes = Object.values(notesObj);
  const userNotes = notes.filter((note) => note.userId === user);
  // console.log(notes)
  if (!user) return <Redirect to="/home" />;

  return (
    <div className="listContainer">
      <div className="notesListContainer">
      <h1 className="notesHeader">All Notes</h1>
      {userNotes.map((note) => {
        // console.log(note.id);
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
      <div className="newNoteContainer">
        <NavLink className="newNote" to="/notes/new">
          New Note
        </NavLink>
      </div>
        {/* <EditOneNote notesProp={notes}/> */}
    </div>
  );
};

export default NotesList;
