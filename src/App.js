import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import { auth } from "./firebase";
import { fireStore } from "./firebase";

import NavBar from "./components/NavBar/NavBar";
import Enter from "./components/Enter/Enter";
import Main from "./components/Main/Main";

function App() {
  /*we are not signed out of the website when refreshing because we used useAuthState hook */
  const [user] = useAuthState(auth);

  return (
    <div>
      {/* <NavBar /> */}

      {user ? <Main /> : <Enter />}
    </div>
  );
}

export default App;
