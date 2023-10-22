import React, { Component } from 'react';
import ContactsList from 'components/ContactsList/ContactsList';
export default class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    /*if (!isNaN(name)) {
      alert('The name field cannot contain only numbers!!!');
      this.setState({ name: '' });
      return;
    }*/
    if (/[^+0-9]/.test(number)) {
      alert('The phone number field can only contain numbers!!!');
      return;
    }

    if (name.trim() !== '') {
      /* We get the name and pass it
      to the parent component through 
      the function as the props property*/
      this.props.onAddContact(name);

      this.setState({ name: '' });
    }
    if (number.trim() !== '') {
      this.props.onAddContact(number);
      this.setState({ number: '' });
    }
  };
  handelNameChange = event => {
    this.setState(prevState => ({ name: event.target.value }));
  };

  // handleClick = event => {
  //   const name = event.target.name;
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // };

  handelNumberChange = event => {
    this.setState(prevSate => ({ number: event.target.value }));
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
              pattern="[a-zA-Zа-яА-ЯіІїЇґҐєЄ']+"
              value={this.state.name}
              onChange={this.handelNameChange}
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              required
              // pattern="^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$"
              value={this.state.number}
              onChange={this.handelNumberChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ContactsList contacts={this.props.contacts} />
      </>
    );
  }
}
