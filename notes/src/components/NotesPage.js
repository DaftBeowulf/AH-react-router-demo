import React from "react";
import NotesList from "./NotesList";
import FullNote from "./FullNote";

import { connect } from "react-redux";
import { addNote } from "../actions";

class NotesPage extends React.Component {
  state = {
    title: "",
    content: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    // console.log("works");
    this.props.addNote(this.state);
    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <div className="notespage-wrapper">
        <h1>Notes Page</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Note title"
            value={this.state.title}
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="content"
            placeholder="Note text"
            value={this.state.content}
            onChange={this.changeHandler}
            required
          />
          <button>Submit</button>
        </form>

        <section className="note-section-wrapper">
          <NotesList />
          <FullNote />
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(NotesPage);
