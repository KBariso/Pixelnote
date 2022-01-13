import React from "react";
import './notebook.css'

const Notebook = ({id, userId, title, createdAt, updatedAt }) => {
  return (
    <>
      <div className="notebookContainer">
        <p className="notebookList">*{title}*
        <span className="errorMessage"> -UNAVAILABLE-</span>
        </p>
    <h5 className="headerNotebook">Is currently work in progress</h5>
      </div>
    </>
  );
};

export default Notebook;
