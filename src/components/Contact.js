import React, { Component } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Consumer } from "../Context";

const iconShow = <FontAwesomeIcon icon={faArrowDown} />;
const iconDelete = <FontAwesomeIcon icon={faTimes} />;

export default class Contact extends Component {
  // state = {
  //   // je créer un state avec une propriété show ( boolean )
  //   show: true,
  // };

  deleteContact = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  }; //delete contact using reducer ( CF : Context.js)

  showOnClick = (dispatch) => {
    dispatch({ type: "SHOW_HIDE" });
  }; // show/hide content using reducer ( CF : Context.js)

  // showOnClick = () => {
  //   // je créée une fonction qui modifie la valeur du boolean du state pour m'en servir de switch
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };
  render() {
    return (
      <Consumer>
        {(value) => {
          // ( CF : Context.js)
          return (
            <div className="contact">
              <div className="card">
                <div className="cardHead">
                  <div className="title">
                    <h4>
                      {this.props.nom}
                      <i
                        onClick={() => this.showOnClick(value.dispatch)}
                        className="openIcon"
                      >
                        {iconShow}
                      </i>
                      <i
                        onClick={() =>
                          this.deleteContact(this.props.id, value.dispatch)
                        }
                        className="deleteIcon"
                      >
                        {iconDelete}
                      </i>
                      {/* j'ajoute une écoute d'évènement sur l'élément pour appeller ma fonction showOnClick */}
                    </h4>
                  </div>

                  <div className="btnHolder"></div>
                </div>

                <div className="cardBody">
                  {value.show ? (
                    // j'exécute une opération ternaire en regardant la valeur du booléan de mon state pour afficher ou non mon ul
                    <ul>
                      <li>Telephone : {this.props.tel}</li>
                      <li>Email : {this.props.mail}</li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
