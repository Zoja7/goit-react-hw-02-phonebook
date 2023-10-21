import React, { Component } from 'react';
import Contacts from 'components/Contacts/Contacts';
export default class Phonebook extends Component {
  state = {
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    if (!isNaN(name)) {
      alert('The name can`t be a number');
      this.setState({ name: '' });
      return;
    }

    if (name.trim() !== '') {
      /* We get the name and pass it
      to the parent component through 
      the function as the props property*/
      this.props.onAddContact(name);

      this.setState({ name: '' });
    }
  };

  handelChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Phonebook</h1>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handelChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.props.contacts.map(contact => {
              return <Contacts key={contact.id} contact={contact} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}
