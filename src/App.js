import React, { Component } from 'react';
import './App.scss';

//Components
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Misha", age: 21 },
      { id: "2", name: "Andriy", age: 20 },
      { id: "3", name: "Someone else", age: 15 }
    ],
    showPersons: true
  }

  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({ showPersons: !isShown })
  }

  deletePersonDataHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
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

    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map( (person, index) => {
            return <Person
              deletePerson={() => this.deletePersonDataHandler(index)}
              changeNameFunc={this.changeNameHandler}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          })}
        </div >
      );
    }

    return (
      <div className="App">

        <h1>Hello, this is my first React app</h1>

        <button
          onClick={this.togglePersonsHandler}>
          {this.state.showPersons ? "Hide Persons" : "Show Persons"}
        </button>

        {persons}

        <div className="">
          <button
            onClick={this.deleteAllPersonsDataHandler}>
            Delete all Persons
        </button>
        </div>

      </div>
    );
  }
}

export default App;
