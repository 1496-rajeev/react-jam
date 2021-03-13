import React from 'react';
import './Person.css'

const person = (props) => {
    return (
         <div className="Person">
             <h1>hello I am {props.name} and my age is {props.age}</h1>
             <p>{props.children}</p>
             <button onClick={props.click}>person component</button>
             <input type="text" placeholder="Enter your name" onChange={props.change}/>
         </div>
    )
};

export default person;