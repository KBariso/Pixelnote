import React from "react";
import notesReducer from "../../store/notes";
import { useSelector } from "react-redux";

const Note = ({id, userId, notebookId, title, content, createdAt, updatedAt }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionUserId = sessionUser?.id
  console.log(sessionUserId === {userId})


  return (
    <div>
        {/* <h3>{userId}</h3> */}
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  );
};

export default Note;
