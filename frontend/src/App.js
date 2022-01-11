import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import Home from "./components/Home";
import Notebooks from "./components/Notebooks";
import Notes from "./components/AllNotesList";

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
          <Route path="/user/notes">
            <Notes />
          </Route>
          <Route path="/user/notebooks">
            <Notebooks />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
