import React from 'react';

const person = (props) => {
    return (
         <div>
             <h1>hello I am {props.name} and my age is {props.age}</h1>
             <p>{props.children}</p>
             <button onClick={props.click}>person component</button>
         </div>
    )
};

export default person;