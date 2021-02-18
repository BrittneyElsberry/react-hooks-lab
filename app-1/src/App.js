import React, {useState} from 'react'
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (item)=> {
    const newTodos = [...todos, item]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <List list={todos}/>
      <AddTodo addTodo={addTodo} />
    </div>
  ); 
}

export default App;
