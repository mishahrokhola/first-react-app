import React, { Component } from 'react';
import './App.css';

//Components
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello,</h1>
        <Person name="Misha" />
        <Person name="Andriy"><p>My age is 21</p></Person>
      </div>
    );
  }
}

export default App;
