import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddUser extends React.Component {
  state = {
    name: "",
    address: "",
    profile: "",
    education: "",
    image: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    const userData = JSON.stringify(this.state);
    console.log(userData);

    axios
      .post(`http://localhost:9000/posts`, userData, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.replace("http://localhost:3000");
      });
  };

  render() {
    return (
      <div>
        <Link className="ui red button" to="/">
          <i className="left arrow icon"></i>
          Go Back To Home
        </Link>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </div>
            <div className="field">
              <label>Address</label>
              <input
                type="text"
                onChange={e => this.setState({ address: e.target.value })}
                value={this.state.address}
              />
            </div>
            <div className="field">
              <label>Profile</label>
              <input
                type="text"
                onChange={e => this.setState({ profile: e.target.value })}
                value={this.state.profile}
              />
            </div>

            <div className="field">
              <label>image</label>
              <input
                type="file"
                onChange={e => this.setState({ image: e.target.value })}
                value={this.state.image}
              />
            </div>

            <div className="field">
              <label>Education</label>
              <input
                type="text"
                onChange={e => this.setState({ education: e.target.value })}
                value={this.state.education}
              />
            </div>

            <button className="ui primary button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUser;
