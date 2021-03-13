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

   const switchHandlerReverse = (name,age) => {
    setPersonState({persons: [
      {name:name, age: age},
      {name:"rajeev", age:30}
    ]})
   }

    return (
      <div className="App">
        <Person 
          name={personState.persons[0].name} 
          age={personState.persons[0].age}
          click={switchHandler}>children test</Person>
        {/* <button onClick={()=>switchHandlerReverse('maxbarrow',34)}>click me to reverse</button> */}
        <button onClick={switchHandlerReverse.bind(this,'maxbind',34)}>click me to reverse</button>
      </div>
    );
}

export default App;
