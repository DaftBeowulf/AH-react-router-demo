import React from "react";
import axios from "axios";
import NotesList from "./NotesList";

export default class NotesPage extends React.Component {
  state = {
    notes: [],
    title: "",
    content: ""
  };

  url = "https://fsw14-lambda-notes.herokuapp.com/api/notes";

  componentDidMount() {
    axios
      .get(this.url)
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log("Error: ", err));
  }

  // changeHandler = ({target: {name, value}}) => {
  //     this.setState({
  //         newNote: {
  //             [name]: value
  //         }
  //     })
  // }

  submitHandler = e => {
    e.preventDefault();
    // console.log("works");
    axios
      .post(this.url, { title: this.state.title, content: this.state.content })
      .then(res => console.log(res.data))
      .catch(err => console.log("Error: ", err));
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  deleteNote = id => {
    axios
      .delete(`${this.url}/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log("Error: ", err));
    // console.log(id);
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

        <section>
          <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
          {/* <FullNote />    */}
        </section>
      </div>
    );
  }
}
