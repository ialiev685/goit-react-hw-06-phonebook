import ContactItem from "../ContactItem";
import { useSelector } from "react-redux";
import { getFilterContacts } from "../../redux/phonebook/contacts-selector";
import "./ContactsList.scss";

const ContactsList = () => {
  const items = useSelector(getFilterContacts);

  return (
    <div>
      <ul className="contacts-list">
        {items.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
