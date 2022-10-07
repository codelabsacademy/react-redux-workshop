
import {deleteTodo} from "../state/todoSlice"
import {useDispatch} from "react-redux"

const Todo = (props)=>{
    const dispatch = useDispatch()
    return(
        <div className="item">
          <div>
            <input type="checkbox" onChange={()=>{props.markCompleted(props.name)}} /> {props.name}</div>
            <div className="manage">
                <button onClick={()=>props.showModal(props.name)}>
                <img src="images/edit.png" width="20px" alt="edit1" />
                </button>
                <button onClick={()=>{dispatch(deleteTodo(props.name))}}>
                <img src="images/delete.png" width="15px" alt="del1" />
                </button>
            </div>
        </div>
    )
}

export default Todo