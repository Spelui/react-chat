import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebase";

import Enter from "./components/Enter/Enter";
import Main from "./components/Main/Main";

function App() {
  /*we are not signed out of the website when refreshing because we used useAuthState hook */
  const [user] = useAuthState(auth);

  return <>{user ? <Main /> : <Enter />}</>;
}

export default App;
