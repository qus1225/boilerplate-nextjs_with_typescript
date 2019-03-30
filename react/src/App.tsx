import React, { Component } from "react";
import "./App.scss";
import SampleComponent from "./pages/sample";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


function Index() {
  return <h2>보일러 플레이트</h2>;
}

function AppRouter() {
  return (
    <div className="container">
      <Router>
        <div className="navBar">
          <Link to="/" >메인</Link>
          <Link to="/sample" >샘플페이지</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/sample" exact component={SampleComponent} />

        </Switch>
      </Router>
    </div>
  );
}
export default AppRouter;
