import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDetail from "./UserDetails";
import EditUser from "./EditUser";

import AddUser from "./AddUser";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="ui container" style={{ marginTop: "2rem" }}>
          <Route exact path="/" component={UserDetail} />
          <Route exact path="/add-user" component={AddUser} />
          <Route path="/edit-user" component={EditUser} />
        </div>
      </Router>
    );
  }
}

export default App;
