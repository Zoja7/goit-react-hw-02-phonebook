import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
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
