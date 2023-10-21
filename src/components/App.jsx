import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    const newContact = {
      id: nanoid(),
      name: name,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <Phonebook
          onAddContact={this.addContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
