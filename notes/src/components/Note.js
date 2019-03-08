import React from "react";
import { deleteNote, editNote } from "../actions";
import { connect } from "react-redux";

class Note extends React.Component {
  state = { isEditing: false, title: "", content: "" };

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    // console.log("works");
    this.props.editNote(this.props.note.id, {
      title: this.state.title,
      content: this.state.content
    });
    this.setState({
      title: this.props.note.title,
      content: this.props.note.content,
      isEditing: false
    });
  };

  render() {
    if (!this.state.isEditing) {
      return (
        <>
          <h2>
            {this.props.note.title}
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => this.props.deleteNote(this.props.note.id)}
            >
              X
            </span>
          </h2>
          <button onClick={this.toggleEdit}>Edit note</button>
        </>
      );
    } else {
      return (
        <>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="title"
              placeholder={this.props.note.title}
              value={this.state.title}
              onChange={this.changeHandler}
              required
            />
            <input
              type="text"
              name="content"
              placeholder={this.props.note.content}
              value={this.state.content}
              onChange={this.changeHandler}
              required
            />
            <button>Submit changes</button>
          </form>
          <button onClick={this.toggleEdit}>Cancel Edit</button>
        </>
      );
    }
  }
}

export default connect(
  null,
  { deleteNote, editNote }
)(Note);
