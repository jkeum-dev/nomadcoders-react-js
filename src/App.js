import PropTypes from "prop-types";
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    
  };
  minus = () => {
    
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button>Add</button>
        <button>Minus</button>
      </div>
    )
  }
}

export default App;
