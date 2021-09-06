import React from "react";
// import { connect } from "react-redux";

import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";
import Section from "./Section";
import Filter from "./Filter";
import "./App.scss";

const App = () => {
  return (
    <Section>
      <h1 className="caption">Phonebook</h1>
      <ContactForm />

      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsList />
    </Section>
  );
};

// const getFilterContacts = (items, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   items: getFilterContacts(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(actions.addItem(item)),
//   deleteItem: (item) => dispatch(actions.deleteItem(item)),
// });

// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
