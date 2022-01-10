import React from "react";

const Notebook = ({ key: id, userId, title, createdAt, updatedAt }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Notebook;
