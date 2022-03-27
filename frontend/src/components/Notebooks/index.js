import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { getAllNotebooks } from "../../store/notebooks";
import Notebook from "../Notebook";
import "./notebooks.css";
import NewNotebookModal from "../NewNotebookModal";
// import OneNotebookDetails from "../OneNotebookDetails";
// import { getOneNotebook } from "../store/notebooks";

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

  // useEffect(() => {
  //   dispatch(getOneNotebook());
  // }, [dispatch]);


  //any data manip, from our state. If an array - map and render, so you can have a subcomponent

  return (
    <>
      {/* <h2 className="WOP">This page is currently under construction</h2> */}
      <div className="allNotebooks">

        <NewNotebookModal />

          {/* <div className="notebookList"> */}
            {userNotebooks.map((notebook) => {
              return (
                <Notebook
                id={notebook.id}
                userId={notebook.userId}
                title={notebook.title}
                createdAt={notebook.createdAt}
                updatedAt={notebook.updatedAt}
                />

                );
              })}

              {/* <OneNotebookDetails /> */}
          {/* </div> */}
      </div>
    </>
  );
};

export default Notebooks;
