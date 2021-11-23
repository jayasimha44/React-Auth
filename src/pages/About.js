import React from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  let user = JSON.parse(localStorage.getItem("POWERSTAR"));
  const history = useHistory();

  return (
    <div className="container">
      {user ? (
        <div>
          <h3>About this page!</h3>
          <p>This is the React Authentication App with localstorage!</p>
        </div>
      ) : (
        history.push("/login")
      )}
    </div>
  );
};

export default About;
