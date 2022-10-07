import {useState} from "react"

const Header = (props)=>{

    const [newTodo, setNewTodo] = useState("")

    return(
        <>
            <div className="header">
            <div className="title">My Todo List</div>
            <div className="task-input">
                <input type="text" value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}} placeholder="Add a new task" />
                <button onClick={()=>{props.addTodo(newTodo)}}>Add</button>
                </div>
            </div>
        </>
    )

}

export default Header
