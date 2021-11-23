import React from "react";
import { useHistory } from "react-router-dom";
import Welcome from "../components/Welcome";

const Homepage = () => {
  const history = useHistory();
  let user = JSON.parse(localStorage.getItem("POWERSTAR"));
  return <div>{user ? <Welcome /> : history.push("/login")}</div>;
};

export default Homepage;
