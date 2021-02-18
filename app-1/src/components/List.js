import React from 'react' 
import Todo from './Todo'

const List = (props) => {

// const [list, setList] = useState([]) -- getting state passed down as props from App.js

return (

    <div>

        {props.list.map((item, index) =>{
            return(
                <Todo item={item} key={index}/>
            )
        })}
    </div>
)


}
export default List