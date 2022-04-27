import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, themes } from "../../context/themeContext";

import { auth } from "../../firebase";
import Filter from "../Filter/Filter";
import { FiLogOut } from "react-icons/fi";
import s from "./UserInf.module.scss";

const UserInf = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const logOutBtn = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div
      className={
        theme === themes.light ? `${s.userInf}` : `${s.userInf} ${s.darkTheme}`
      }
    >
      <div className={s.userInf__account}>
        <div className={s.userInf__inf}>
          <img
            className={s.userInf__photo}
            src={user.photoURL}
            alt="avatar"
            width="50"
            height="50"
          />

          <p className={s.userInf__name}>{user.displayName}</p>
        </div>

        <button className={s.userInf__btn} onClick={() => logOutBtn()}>
          <FiLogOut />
        </button>
      </div>
      <Filter />
    </div>
  );
};

export default UserInf;
