import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { ThemeContext, themes } from "../../context/themeContext";
import { getFilter } from "../../redux/message/messageSelectors";
import { changeFilter } from "../../redux/message/messageSlice";
import s from "./Filter.module.scss";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === themes.light ? `${s.filter}` : `${s.filter} ${s.darkTheme}`
      }
    >
      <input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        value={filter}
        className={s.filter__input}
        type="text"
        placeholder="Search or Start new chat"
      />
    </div>
  );
};

export default Filter;
