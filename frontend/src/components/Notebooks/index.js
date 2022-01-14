import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { getAllNotebooks } from "../../store/notebooks";
import Notebook from "../Notebook";
import "./notebooks.css";

const Notebooks = () => {
  const dispatch = useDispatch();

  //create useEffect, call our thunk
  useEffect(() => {
    dispatch(getAllNotebooks());
  }, [dispatch]);

  //useSelector, pull the slice of state
  //whatever we pass into our rootReducer, is what we key in our useSelector
  const user = useSelector((state) => state.session?.user?.id);
  const notebooksObj = useSelector((state) => state.notebooks);
  const notebooks = Object.values(notebooksObj);
  // console.log(notebooksObj)
  const userNotebooks = notebooks.filter(
    (notebook) => notebook.userId === user
  );

  //any data manip, from our state. If an array - map and render, so you can have a subcomponent

  return (
    <div className="allNotebooks">

        <div className="notebookList">
        <div >
      <h2 className="WOP">This page is currently under construction</h2>
    </div>
          {userNotebooks.map(({ id, userId, title, createdAt, updatedAt }) => {
            return (
              <Notebook
                key={id}
                userId={userId}
                title={title}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            );
          })}
        </div>
    </div>

  );
};

export default Notebooks;
