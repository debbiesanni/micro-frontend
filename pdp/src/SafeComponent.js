import React, { Component } from "react";

export default class SafeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDrivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return <div>SafeComponent</div>;
    }
    return this.props.children;
  }
}
