import React from "react";
import { withProps } from "react-router-dom";

export default class welcome extends React.Component {
  state = {
    show: true,
    text: "hai boscu"
  };
  changeState = () => {
    this.setState(prev => ({ show: !prev.show }));
  };

  changing = e => {
    if (e.which === 13) {
      this.setState({ text: e.target.value });
      this.setState(prev => ({ show: !prev.show }));
    }
  };

  render() {
    const temp = this.state.show ? (
      <p>{this.state.text}</p>
    ) : (
      <input type="text" defaultValue={this.state.text} onKeyPress={this.changing} />
    );
    return (
      <div>
        <button onClick={this.changeState}>Change condition</button>
        {temp}
      </div>
    );
  }

  componentDidMount() {
    console.log(
      this.props,
      this.props.location.search,
      this.props.match.params.user
    );
  }
}
