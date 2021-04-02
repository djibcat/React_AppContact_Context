import React, { Component } from "react";
import { Consumer } from "../Context";
import Contact from "./Contact";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <React.Fragment>
              {value.contacts.map((contact) => {
                return (
                  <Contact
                    key={contact.id}
                    id={contact.id}
                    nom={contact.nom}
                    mail={contact.mail}
                    tel={contact.tel}
                  />
                );
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
