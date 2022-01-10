import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { getAllNotes } from "../../store/notes";
import Note from "../OneNote";
import "./AllNotes.css";

const Notes = () => {
  const dispatch = useDispatch();

  //create useEffect, call our thunk
  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  //useSelector, pull the slice of state
  //whatever we pass into our rootReducer, is what we key in our useSelector
  const notesObj = useSelector((state) => state.notes);
  const notes = Object.values(notesObj);
  // console.log(notebooksObj)

  //any data manip, from our state. If an array - map and render, so you can have a subcomponent

  return (
    <div>
      {notes.map(
        ({
          id,
          userId,
          notebookId,
          title,
          content,
          createdAt,
          updatedAt
        }) => {
          return (
            <Note
            key={id}
              userId={userId}
              notebookId={notebookId}
              title={title}
              content={content}
              createdAt={createdAt}
              updatedAt={updatedAt}
            />
          );
        }
      )}
    </div>
  );
};

export default Notes;
