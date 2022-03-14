import React, { useEffect, useState } from "react";
import './notebook.css'
import { getAllNotes } from "../../store/notes";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Notebook = ({id, userId, title, createdAt, updatedAt }) => {
  const dispatch = useDispatch();
  const [selectedNotebook, setSelectedNotebook] = useState()
  console.log({id})

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);



  return (
    <>
      <div className="notebookContainer">
      <NavLink className="note" to={`/notebooks/${id}`}>
        <p className="notebookList" onClick={()=>setSelectedNotebook(id)}>*{title}*
        {/* <span className="errorMessage"> -UNAVAILABLE-</span> */}
        </p>
        </NavLink>
    <h5 className="headerNotebook">Is currently work in progress</h5>
      </div>
    </>
  );
};

export default Notebook;
