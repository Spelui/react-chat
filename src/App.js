import { useState, useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebase";

import Enter from "./components/Enter/Enter";
import Main from "./components/Main/Main";
import { ThemeContext, themes } from "./context/themeContext";

function App() {
  /*we are not signed out of the website when refreshing because we used useAuthState hook */
  const [user] = useAuthState(auth);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? themes.light
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {user ? <Main /> : <Enter />}
    </ThemeContext.Provider>
  );
}

export default App;
