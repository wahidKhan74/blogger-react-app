import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AuthorDetails extends Component {
    
  // create a default props or pass props
  static defaultProps = {
    name: "John Smith",
    number: 345445656,
    status: true,
    booklist: ["Autobiography", "Novel", "Fictions"],
  };

  render() {
    return (
      <div className="card bg-light mb-3">
        <h5 className="card-header"> {this.props.name} </h5>
        <div className="card-body">
          <p className="card-title">{this.props.number}</p>
          <p className="card-text"> Author status :-  {this.props.status}</p>
          <p className="card-text"> Book List : {this.props.booklist}</p>
        </div>
      </div>
    );
  }
}

// validating props types
AuthorDetails.propTypes  = {
  name: PropTypes.string,
  number: PropTypes.number,
  status: PropTypes.bool,
  booklist: PropTypes.array,
};
