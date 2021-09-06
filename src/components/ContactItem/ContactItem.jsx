import "./ContactItem.scss";
import * as actions from "../../redux/phonebook/contacts-action";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className="contacts-list__item">
      <span>
        {name}: {number}
      </span>
      <input
        className="contacts-list__button"
        type="button"
        value="delete"
        onClick={() => dispatch(actions.deleteItem(id))}
      />
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ContactItem;
