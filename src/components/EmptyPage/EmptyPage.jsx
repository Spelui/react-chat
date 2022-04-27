import { useContext } from "react";
import { ThemeContext, themes } from "../../context/themeContext";
import s from "./EmptyPage.module.scss";

const EmptyPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={
        theme === themes.light ? `${s.empty}` : `${s.empty} ${s.darkTheme}`
      }
    >
      <p className={s.empty__text}>Choice a Chat</p>
    </div>
  );
};

export default EmptyPage;
