import React, { Component } from "react";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  submitHandler = () => {
    localStorage.setItem("username", this.state.username);
  };

  changeHandler = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Login</h2>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            value={this.state.username}
            placeholder="Enter, friend"
            required
          />
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;
