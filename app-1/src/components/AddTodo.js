import React, {useState} from 'react'

const AddTodo = (props) => {

   const [input, setInput] = useState('') 

   const handleAddTodo = (e)=> {
    e.preventDefault() //always need specifically for forms
    props.addTodo(input)
    setInput('')
   }

return(
<div>
    <form onSubmit={handleAddTodo}> 
    <input 
    value={input} 
    onChange={(e)=>setInput(e.target.value)}
    />

    <button /*onClick={()=>{props.addTodo()}}*/>Submit</button>
    </form>


</div>

)
}

export default AddTodo