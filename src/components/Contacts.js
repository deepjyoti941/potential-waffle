import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johndoe@mail.com',
          phone: '666666666'
        },
        {
          id: 2,
          name: 'Elisa Cuenca',
          email: 'johndoe@mail.com',
          phone: '666666666'
        },
        {
          id: 3,
          name: 'Txusti Rina',
          email: 'johndoe@mail.com',
          phone: '666666666'
        }
      ]
    };
  }

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
