import React, { Component } from "react";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      rememberme: false,
    };
  }

  // Events Field Change Handlers
  handleChange = (event) => {
    // console.log(event.target.value);
    const fieldName = event.target.name;
    let fieldValue = event.target.value;
    if(fieldName=="rememberme") {
        fieldValue = event.target.checked;
    }
    // console.log(fieldName, fieldValue);
    this.setState({ [fieldName]: fieldValue });

    //clearing fields
    this.setState({
        email: "",
        password: "",
        rememberme: false,
      });
  };

  // handle form submit
  handleFormSubmit = (event) => {
    // prevent default event submit
    event.preventDefault();
    
    console.log(this.state);
  }

  render() {
    return (
      <div className="card bg-light mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <form onSubmit={this.handleFormSubmit} >
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email" name="email" value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password" name="password" value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberme" name="rememberme" value={this.state.rememberme}
                    onChange={this.handleChange}
                  />
                  <label className="form-check-label" htmlFor="rememberme">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
