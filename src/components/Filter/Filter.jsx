import "./Filter.scss";
// import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/contacts-selector";
import * as actions from "../../redux/phonebook/contacts-action";
// import { connect } from "react-redux";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = (e) => dispatch(actions.getFilterItems(e.target.value));

  return (
    <label className="filter-input">
      Поиск:
      <input
        className="filter-input__text"
        type="text"
        value={filter}
        name="filter"
        onChange={changeFilter}
      />
    </label>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string,
// };

// const mapStateToProps = (state) => ({
//   filter: state.contacts.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (e) => dispatch(actions.getFilterItems(e.target.value)),
// });

// export default connect(mapStateToProps,mapDispatchToProps)(Filter);

export default Filter;
