import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const [signup, setSignup] = useState([
    {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
  ]);
  const history = useHistory();
  const { name, email, password, password2 } = signup;

  const changeHandler = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match!");
    } else {
      localStorage.setItem("POWERSTAR", JSON.stringify(signup));
      setSignup([]);
      history.push("/");
    }
  };

  return (
    <div className="container">
      <h3>Signup</h3>
      <form onSubmit={submitHandler}>
        {" "}
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Name"
            style={{ width: "50%" }}
            name="name"
            value={name || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            <b>Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
            style={{ width: "50%" }}
            name="email"
            value={email || ""}
            onChange={changeHandler}
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
            style={{ width: "50%" }}
            name="password"
            value={password || ""}
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword2" className="form-label">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            id="inputPassword2"
            style={{ width: "50%" }}
            name="password2"
            value={password2 || ""}
            onChange={changeHandler}
          />
        </div>
        <button className="btn btn-primary">Register</button>
        &nbsp;
        <span>
          Already having access? <Link to="/login">Login</Link> here!
        </span>
      </form>
    </div>
  );
};

export default Signup;
