import React, { useState } from 'react';
import './App.css';
import { Person } from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ]= useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
  })

  console.log("personsState: ", personsState)

  const testing = useState('some other value')
  // console.log("otherState: ", otherState)

  const handleClick = () => {
  setPersonsState({ persons: [
      { name: 'Max', age: 99},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ]})
  }

  const nameChangeHandler = event => {
    console.log("event.target.value: ", event.target.value)

    setPersonsState({
      persons: [
        { name: event.target.name, age: 99},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 26}
      ]
    })
  }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
        <button onClick={handleClick}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} nameChangeHandler={nameChangeHandler}/>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={handleClick} nameChangeHandler={nameChangeHandler}> I like race car </Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} nameChangeHandler={nameChangeHandler}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi I\'m a React App!'))
}

export default App;


