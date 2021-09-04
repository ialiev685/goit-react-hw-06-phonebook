import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/phonebook/contacts-action.js";

import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";

const App = ({ items, addItem, deleteItem }) => {
  const addContact = (newItem) => {
    if (checkDoubleName(newItem)) {
      alert(`${newItem.name} уже есть в контактах.`);
      return false;
    }

    addItem(newItem);
  };

  const checkDoubleName = (newContact) => {
    const { name } = newContact;
    const normalizedName = name.toLowerCase();

    return items.some(({ name }) => name.toLowerCase() === normalizedName);
  };

  return (
    <Section>
      <h1 className="caption">Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsList contacts={items} onDelete={deleteItem} />
    </Section>
  );
};

const getFilterContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ items, filter }) => ({
  items: getFilterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(actions.addItem(item)),
  deleteItem: (item) => dispatch(actions.deleteItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
