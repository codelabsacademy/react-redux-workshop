
import Todo from "./Todo"

const TodoList =(props)=>{
    return(
      <div className="todos-list">
          {props.todos.map((todo,key)=><Todo 
            showModal={props.showModal}
            markCompleted={props.markCompleted} 
            key={key} 
            name={todo.name}/>)}
      </div>
    )
}

export default TodoList