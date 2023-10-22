import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handelFilterChange = event => {
    const value = event.target.value;
    this.setState({ filter: value });
  };

  filterContacts = (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const FilteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handelFilterChange} />
        <ContactsList
          contacts={this.state.contacts}
          filtered={FilteredContacts}
        />
      </div>
    );
  }
}
