import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import { auth } from "./firebase";
import firebase from "firebase/compat/app";

import Enter from "./components/Enter/Enter";
import Main from "./components/Main/Main";
// import { getFirestore, doc } from "firebase/firestore";
// import { useDocument } from "react-firebase-hooks/firestore";
// import { getApp } from "firebase/app";

function App() {
  /*we are not signed out of the website when refreshing because we used useAuthState hook */
  const [user] = useAuthState(auth);
  // const firebaseApp = getApp();

  // const [value, loading, error] = useDocument(
  //   doc(getFirestore(firebaseApp), "friends", "FDvojx9n4UPIbQNWfaHa"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );
  // console.log(value.data());

  return (
    <div>
      {/* <NavBar /> */}

      {user ? <Main /> : <Enter />}
    </div>
  );
}

export default App;
