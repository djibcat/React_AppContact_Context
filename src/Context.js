import React, { Component } from "react";

const reducer = (state, action) => {
  // reducer
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "SHOW_HIDE":
      return {
        show: !state.show,
      };
    default:
      return state;
  }
};
const Context = React.createContext();
export class Provider extends Component {
  state = {
    // global state
    contacts: [
      {
        id: 1,
        nom: "John Doe",
        mail: "john.doe@gmail.com",
        tel: "010101010101",
        show: true,
      },
      {
        id: 2,
        nom: "John Doe",
        mail: "john.doe@gmail.com",
        tel: "010101010101",
        show: true,
      },
      {
        id: 3,
        nom: "John Doe",
        mail: "john.doe@gmail.com",
        tel: "010101010101",
        show: true,
      },
      {
        id: 4,
        nom: "John Doe",
        mail: "john.doe@gmail.com",
        tel: "010101010101",
        show: true,
      },
    ],

    show: true, //TODO sheck how to target only the selected "card" for the toggle

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
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
