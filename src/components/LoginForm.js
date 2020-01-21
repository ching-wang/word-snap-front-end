import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      user_1: "",
      user_2: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.user_1 || !this.state.user_2) return;

    this.props.handleLogin(this.state.user_1, this.state.user_2);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-group">
        <div className="form-group">
          <br></br>
          <label>
            <br></br>
            Player 1
            <input
              id="username_1"
              name="user_1"
              type="text"
              onChange={this.handleChange}
              value={this.state.user_1}
              className="form-control"
              placeholder="Your name"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Player 2
            <input
              id="username_2"
              name="user_2"
              type="text"
              onChange={this.handleChange}
              value={this.state.user_2}
              className="form-control"
              placeholder="Your name"
            />
          </label>
        </div>
        <div className="form-group">
          <button className="btn btn-dark" type="submit">
            Start a game
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
