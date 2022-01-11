import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { getAllNotes } from "../../store/notes";
import Note from "../AllNotes";
import "./AllNotes.css";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  const user = useSelector((state) => state.session?.user?.id);
  const notesObj = useSelector((state) => state.notes);
  const notes = Object.values(notesObj);
  //   console.log(user)
  const userNotes = notes.filter((note) => note.userId === user);
  //   console.log(notes[5].userId)

  return (
    <div>
      {userNotes.map(
        ({ id, userId, notebookId, title, content, createdAt, updatedAt }) => {
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
