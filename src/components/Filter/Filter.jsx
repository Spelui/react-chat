import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/message/messageSelectors";
import { changeFilter } from "../../redux/message/messageSlice";
import "./Filter.scss";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className="filter">
      <input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        value={filter}
        className="filter__input"
        type="text"
        placeholder="Search or Start new chat"
      />
    </div>
  );
};

export default Filter;
