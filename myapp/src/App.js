import React, { Component } from 'react';
import Person from "./Person/Person";
import './App.css';

class App extends Component {
   state = {
     persons: [
       {name:"max", age: 28},
       {name:"rajeev", age:30}
     ]
   }

  render() {
    return (
      <div className="App">
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>children test</Person>
      </div>
    );
  }
}

export default App;
