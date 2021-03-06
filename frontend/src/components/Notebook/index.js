import React, { useEffect, useState } from "react";
import './notebook.css'
import { getAllNotes } from "../../store/notes";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import OneNotebookDetails from "../OneNotebookDetails";


const Notebook = ({id, userId, title, createdAt, updatedAt }) => {
  const dispatch = useDispatch();
  const [selectedNotebook, setSelectedNotebook] = useState()
  // console.log({id})

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);



  return (
    <>
      <div className="notebookContainer">
      <NavLink className="note" to={`/notebooks/${id}`}>

        <p className="notebookListName" onClick={()=>setSelectedNotebook(id)}>{title}
        {/* <span className="errorMessage"> -UNAVAILABLE-</span> */}

        <button className='editNotebookBttn'>
          <NavLink className='editNotebookBttn' style={{ color: 'greenyellow' }} to={`/notebooks/${id}/edit`}>
          <i class="fas fa-pen-to-square"/>

          </NavLink>

        </button>

        </p>

      <OneNotebookDetails />
        </NavLink>
        {/* <h5 className="headerNotebook">Is currently work in progress</h5> */}
        {/* <h1>{title}</h1> */}
      <button>
      </button>
      </div>

    </>
  );
};

export default Notebook;
