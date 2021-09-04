import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/phonebook/contacts-action.js";

import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";

const App = ({ items, addItem, deleteItem, filter, getFilter }) => {
  console.log("app", items);
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem("contacts")) ?? [];
  // });

  if (localStorage.getItem("contacts")) {
    const data = JSON.parse(localStorage.getItem("contacts"));
    console.log("data", data);
    // addItem(data);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contacts"));
    console.log();
    if (localStorage.getItem("contacts")) {
    }
  }, []);

  // const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(items));
  }, [addItem]);

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

  const deleteContact = (itemId) => {
    deleteItem(itemId);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    getFilter(value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Section>
      <h1 className="caption">Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className="title">Contacts</h2>
      <Filter valueFilter={filter} onChange={handleChange} />
      <ContactsList contacts={getFilterContacts()} onDelete={deleteContact} />
    </Section>
  );
};

const mapStateToProps = (state) => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(actions.addItem(item)),
  deleteItem: (item) => dispatch(actions.deleteItem(item)),
  getFilter: (searchName) => dispatch(actions.getFilterItems(searchName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
