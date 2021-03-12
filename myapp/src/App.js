import React, { useState } from 'react';
import Person from "./Person/Person";
import './App.css';

const  App = props => {

  const [personState, setPersonState] =  useState({
    persons: [
      {name:"max", age: 28},
      {name:"rajeev", age:30}
    ]
  });
 
  const [otherState, setOtherState] = useState("other usestate")
  console.log(personState, otherState)

  const switchHandler = () => {
    setPersonState({persons: [
      {name:"maxima", age: 28},
      {name:"rajeeva", age:30}
    ]})
   }

    return (
      <div className="App">
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>children test</Person>
        <button onClick={switchHandler}>click me</button>
      </div>
    );
}

export default App;
