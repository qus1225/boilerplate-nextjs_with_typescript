import React, { Component } from "react";
import { Link } from "react-router-dom";

interface IProps {
}
interface IState {
}

export default class SampleComponent extends Component<IProps, IState> {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h2>Sample Page</h2>
        <Link to="/">To Main</Link>
        <div>
          Sample Content
        </div>
      </div>
    );
  }
}