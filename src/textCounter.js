import React, { Component } from 'react';

class TextCounter extends Component {
  
  constructor(){
    super()

    this.state = {
      counter: 0
    }
  }

  updateCounter = (e) => {
    this.setState({counter: e.target.value.length})
  }
  
  render() {

    return (
      <>
        <textarea
          onChange={ this.updateCounter }
          id="" 
          cols="30" rows="10">
          </textarea>
          <h2>{this.state.counter}</h2>
      </>
    );
  }
}

export default TextCounter;
