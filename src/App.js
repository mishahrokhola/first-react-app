import React, { Component } from 'react';
import './App.css';

//Components
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Misha", age: 21 },
      { name: "Andriy", age: 20 },
      { name: "Someone else", age: 15 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Misha", age: 21 },
        { name: "Andriy", age: 20 },
        { name: newName, age: 15 }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Misha", age: 21 },
        { name: "Andriy", age: 20 },
        { name: event.target.value, age: 15 }
      ]
    })
  }

  render() {
    return (
      <div className="App">

        <h1>Hello, this is my first React app</h1>

        <button
          onClick={this.switchNameHandler.bind(this, 'Anna')}>
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          switchNameFunc={this.switchNameHandler.bind(this, 'Anna')}
          changeNameFunc={this.changeNameHandler} />

      </div>
    );
  }
}

export default App;
