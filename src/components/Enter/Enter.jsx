import { useContext } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeContext, themes } from "../../context/themeContext";
import { FcGoogle } from "react-icons/fc";
import s from "./Enter.module.scss";

import { auth, fireStore, googleProvider } from "../../firebase";

const Enter = () => {
  const { theme } = useContext(ThemeContext);

  const singInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      await fireStore.collection("user").doc(auth.currentUser.uid).set({
        //we will not be saving email in our database
        name: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div
      className={
        theme === themes.light ? `${s.enter}` : `${s.enter} ${s.darkTheme}`
      }
    >
      <div className={s.themeBtn}>
        <ThemeSwitcher />
      </div>
      <button className={s.enter__btn} onClick={singInWithGoogle}>
        <FcGoogle /> <p className={s.enter__text}>oogle</p>
      </button>
    </div>
  );
};

export default Enter;
