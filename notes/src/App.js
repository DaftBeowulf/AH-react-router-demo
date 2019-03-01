import React, { Component } from "react";
import "./App.css";
import NotesPage from "./components/NotesPage";
import LoginPage from "./auth/LoginPage";
import authentication from "./auth/authentication";

const Visible = authentication(NotesPage)(LoginPage);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Visible />
      </div>
    );
  }
}

export default App;
