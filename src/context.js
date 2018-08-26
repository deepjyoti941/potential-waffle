import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
