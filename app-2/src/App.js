import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ListItem from './ListItem'
import './App.css';


function App() {

  const [list, setList] = useState([])

  useEffect(()=>{
    axios.get(`https://cat-fact.herokuapp.com/facts`).then((res)=>{
      setList(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div className="App">
    {list.map((elem, index)=>{
      return <ListItem name={elem.text} key={index} />})}
    </div>
  );
  }

export default App
