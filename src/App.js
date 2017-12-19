import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017'
    };
  }

render() {
  return (
    <div className="App">
      <div className="App-title">Countdown to December 25, 2017</div>
      <div>
        <div className="Clock-days">14 Days</div>
        <div className="Clock-hours">30 Hours</div>
        <div className="Clock-minutes">15 Minutes</div>
        <div className="Clock-minutes">20 Seconds</div>
      </div>
      <div>
      <input placeholder='new date' />
      <button>Submit</button>
      </div>
    </div>
    )
  }
}


export default App;
