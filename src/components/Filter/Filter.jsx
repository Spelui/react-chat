import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/friends/friendsSelectors";
import { changeFilter } from "../../redux/friends/friendsSlice";
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
