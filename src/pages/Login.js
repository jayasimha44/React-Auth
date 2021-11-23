import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const history = useHistory();
  const { email, password } = login;
  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(login);
    localStorage.setItem("POWERSTAR", JSON.stringify(login));
    setLogin([]);
    history.push("/");
  };
  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            <b>Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            name="email"
            value={email || ""}
            onChange={changeHandler}
            style={{ width: "50%" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id="inputPassword"
            name="password"
            value={password || ""}
            onChange={changeHandler}
            style={{ width: "50%" }}
          />
        </div>
        <button className="btn btn-primary">Login</button>
        &nbsp;
        <span>
          Don't have access? <Link to="/signup">Signup</Link> here!
        </span>
      </form>
    </div>
  );
};

export default Login;
