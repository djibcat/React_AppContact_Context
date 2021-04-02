import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
