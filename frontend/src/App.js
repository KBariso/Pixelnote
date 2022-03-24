import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Notebooks from "./components/Notebooks";
import OneNotebookDetails from "./components/OneNotebookDetails";
import NotesList from "./components/AllNotesList";
import Note from "./components/OneNote";
import CreateNewNote from "./components/CreateNewNote";
import EditOneNote from "./components/EditNote";
import CreateNotebook from "./components/CreateNotebook";
import EditOneNotebook from "./components/EditNotebook";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Splash />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/notes/:id/edit">
            <EditOneNote />
          </Route>
          <Route path="/notes/new">
            <CreateNewNote />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/notes">
            <NotesList />
            <Route path="/notes/:id">
              <Note />
            </Route>
          </Route>
          <Route path="/notebooks/new">
            <CreateNotebook />
          </Route>
          <Route path="/notebooks/:id/edit">
            <EditOneNotebook />
          </Route>
          <Route path="/notebooks">
            <Notebooks />
              <Route path="/notebooks/:id" exact>
                <OneNotebookDetails />
              </Route>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
