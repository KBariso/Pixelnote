import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Notebooks from "./components/Notebooks";
import NotesList from "./components/AllNotesList";
import Note from "./components/OneNote";

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
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/notes" >
            <NotesList />
          </Route>
          <Route path="/notes/:id" exact>
            <Note />
          </Route>
          <Route path="/notebooks">
            <Notebooks />
          </Route>
        </Switch>
      )}

    </>
  );
}

export default App;
