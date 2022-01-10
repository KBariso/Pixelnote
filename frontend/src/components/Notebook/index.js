import React from "react";

const Notebook = ({id, userId, title, createdAt, updatedAt }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default Notebook;
