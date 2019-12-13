import React from "react";
import NewUser from "./NewUser";
import axios from "axios";

class UserDetail extends React.Component {
  state = { persons: [], uid: "" };

  // fetching data user data from localhost 9000
  componentDidMount() {
    try {
      axios.get(`http://localhost:9000/posts`).then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
    } catch (error) {
      console.log(error);
    }
  }

  personDelete = event => {
    console.log(event.target.getAttribute("id"));
    const id = event.target.getAttribute("id");
    this.setState({ uid: id });
    axios.delete(`http://localhost:9000/posts/${id}`).then(res => {
      console.log(res);
      console.log(res.data);
      document.location.reload();
    });
  };

  personEdit = event => {
    const id = event.target.getAttribute("id");
    window.location.replace(`http://localhost:3000/edit-user/#${id}`);
  };

  personView = event => {
    // console.log(event.target.getAttribute("id"));
    const id = event.target.getAttribute("id");
    try {
      axios.get(`http://localhost:9000/posts/${id}`).then(res => {
        const person = res.data;
        // console.log(person);
        document.querySelector(
          "#root > div > div > div.ui.card > div:nth-child(2) > span"
        ).innerHTML = person.name;
        document.querySelector(
          "#root > div > div > div.ui.card > div:nth-child(2) > div.meta > span"
        ).innerHTML = person.education;
        document.querySelector(
          "#root > div > div > div.ui.card > div:nth-child(2) > div.description"
        ).innerHTML = person.profile;
        document.querySelector(
          "#root > div > div > div.ui.card > div.extra.content > span"
        ).innerHTML = person.address;
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderList() {
    return this.state.persons.map(person => {
      return (
        <tr key={person._id}>
          <td>
            <h4 className="ui image header">
              <img
                src="https://semantic-ui.com/images/avatar2/small/lena.png"
                className="ui mini rounded image"
                alt=""
              />
              <div className="content">
                {person.name}
                <div className="sub header">{person.profile}</div>
              </div>
            </h4>
          </td>
          <td>{person.address}</td>
          <th>
            <div className="ui tiny fluid buttons">
              <button
                className="ui teal button"
                id={person._id}
                onClick={this.personView}
              >
                View
              </button>
              <div className="or"></div>
              <button
                className="ui green button"
                id={person._id}
                onClick={this.personEdit}
              >
                Edit
              </button>
              <div className="or"></div>
              <button
                className="ui red button"
                id={person._id}
                onClick={this.personDelete}
              >
                Delete
              </button>
            </div>
          </th>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <NewUser />
        <table className="ui red celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
        <div className="ui card">
          <div className="image">
            <img
              src="https://semantic-ui.com/images/avatar2/large/kristy.png"
              alt=""
            />
          </div>
          <div className="content">
            <span className="header">Name</span>
            <div className="meta">
              <span className="date">Education</span>
            </div>
            <div className="description">Profile</div>
          </div>
          <div className="extra content">
            <span>
              <i className="mail icon"></i>
              Address
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetail;
