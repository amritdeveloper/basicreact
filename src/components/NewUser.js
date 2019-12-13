import React from "react";
import { Link } from "react-router-dom";

const NewUser = () => {
  return (
    <div className="ui segment" style={{ float: "right" }}>
      <Link className="ui green button" to="/add-user">
        New User
      </Link>
    </div>
  );
};

export default NewUser;
