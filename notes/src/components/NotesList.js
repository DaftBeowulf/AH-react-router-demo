import React, { Component } from "react";
import Note from "./Note";
import { connect } from "react-redux";
import { getNotes } from "../actions";

class NotesList extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="list-wrapper">
        {this.props.notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(
  mapStateToProps,
  { getNotes }
)(NotesList);
