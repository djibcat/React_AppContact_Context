import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="brand">
        <h1>App Contact</h1>
      </div>
      <div className="nav">
        <a href="/">Accueil</a>
      </div>
    </div>
  );
}
