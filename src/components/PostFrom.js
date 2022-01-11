import React, { Component } from "react";

export default class PostFrom extends Component {
    constructor() {
        super();
        // this.handleChange = this.handleChange.bind(this);        
        this.state = {
            title: "",
            body: "",
            author: "",
            category: "",
        };
    }
  // define state
  

  // Events Field Change Handlers
  handleChange =(event) => {
    // console.log(event.target.value);
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState({ [fieldName]: fieldValue });
  }

  //render categories
  renderCategories() {
    return this.props.categories.map((category) => {
      return (
        <option key={category.code} value={category.code}>
          {category.name}
        </option>
      );
    });
  }

  // handle form submit
  handleFormSubmit = (event) => {
    // prevent default event submit
    event.preventDefault();
    // submit state with new post
    this.props.onNewPost(this.state);
    //clearing fields
    this.setState({
      title: "",
      body: "",
      author: "",
      category: "",
    });
  }

  render() {
    return (
      <div className="col-sm-4">
        <h3>Post Form</h3>
        <div className="car bg-light">
          <div className="card-body">
            <form onSubmit={this.handleFormSubmit}>
              <div class="form-group">
                <label for="title">Post Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"  name="title" value={this.state.title}
                  placeholder="Enter Title"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <input
                  type="text"
                  className="form-control"
                  id="body" name="body" value={this.state.body}
                  placeholder="Enter body"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author" name="author" value={this.state.author}
                  placeholder="Enter author"
                  onChange={this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="author">Selecty category</label>
                <select
                  className="form-control"
                  id="category"
                  name="category" name="category" value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option>...</option>
                  {this.renderCategories()}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
