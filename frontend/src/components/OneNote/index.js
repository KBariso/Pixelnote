import React from "react";

const Note = ({ key: id, userId, notebookId, title, content, createdAt, updatedAt }) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

export default Note;
