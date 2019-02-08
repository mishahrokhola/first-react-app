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


  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(element => element.id === id);

    // const person = Object.assign({}, this.state.persons[personIndex]) // the same as spread
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    const persons = [...this.state.persons]; // create a new array with spread operator
    persons[personIndex] = person; // works fine with const because of the array is pointing to the elements so variable doesn't straight change

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const isShown = this.state.showPersons;
    this.setState({ showPersons: !isShown })
  }

  deletePersonDataHandler = (personIndex) => {
    const persons = [...this.state.persons]; // create a new array with spread operator
    persons.splice(personIndex, 1); // works fine with const because of the array is pointing to the elements so variable doesn't straight change
    this.setState({ persons: persons })
  }

  deleteAllPersonsDataHandler = () => {
    this.setState({ persons: [] })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((person, index) => {
            return <Person
              deletePerson={() => this.deletePersonDataHandler(index)}
              changeNameFunc={(event) => this.changeNameHandler(event, person.id)}
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
