 
import React, {useState} from 'react'; 
import ReactDOM from 'react-dom'; 
 
const ListItems = (props) => {
  return <li>{props.animal}</li>
}

const List = (props) => {
  return (
    <ul>
      {props.animals.map((animal)=> {
        return <ListItems key = {animal} animal = {animal}  />
      })}
    </ul>
  )
}


const App=()=>{
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>This are some animals:</h1>
      <List animals={animals}/>
    </div>
  )
}

export default App;