import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <label className={s.lable}>
      <span>Find contacts by name</span>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={s.input}
      />
    </label>
  );
};

export default SearchBox;
