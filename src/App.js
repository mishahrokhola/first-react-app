import React, { Component } from 'react';
import './App.scss';

//Components
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Misha", age: 21 },
      { name: "Andriy", age: 20 },
      { name: "Someone else", age: 15 }
    ],
    showPersons: true
  }

  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({ showPersons: !isShown })
  }

  deleteAllPersonsDataHandler = () => {
    this.setState({ persons: [] })
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
    let persons = null;

    if (this.state.showPersons)
      persons = (
        < div >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changeNameFunc={this.changeNameHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changeNameFunc={this.changeNameHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changeNameFunc={this.changeNameHandler}
          />
        </div >
      );

    return (
      <div className="App">

        <h1>Hello, this is my first React app</h1>

        <button
          onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>

        {persons}
        
      </div>
    );
  }
}

export default App;
