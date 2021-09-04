import "./Filter.scss";
import PropTypes from "prop-types";
import * as actions from "../../redux/phonebook/contacts-action";
import { connect } from "react-redux";

const Filter = ({ filter, onChange }) => {
  return (
    <label className="filter-input">
      Поиск:
      <input
        className="filter-input__text"
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(actions.getFilterItems(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
