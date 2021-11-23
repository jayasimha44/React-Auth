import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./pages/Navbar";
import About from "./pages/About";

import PageNotFound from "./pages/PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="mt-5">
        <Switch>
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/about" component={About} />
          <Route exact path="/logout">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
