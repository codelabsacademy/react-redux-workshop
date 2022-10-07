

import Header from "../components/header"
import TodoList from "../components/TodoList"

import {useState, useEffect} from "react"
import {  Modal, Input } from 'antd';
import 'antd/dist/antd.min.css';

import {editTodo} from "../state/todoSlice"
import {useSelector, useDispatch} from "react-redux"
 

function TodoPage() {

  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTodoName, setNewTodoName] = useState("")
  const [modifiedTodoName, setModifiedTodoName] = useState("")

  const showModal = (todoName) => {
    setIsModalVisible(true);
    setNewTodoName(todoName)
    setModifiedTodoName(todoName)
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(editTodo({modifiedTodoName,newTodoName}))
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [todos, setTodos]= useState([
    {
        name:"Buy groceries for next week",
        completed:false
    },
    {
        name:"Renew car insurance",
        completed:false
    },
    {
        name:"Sign up for online course",
        completed:false
    },
  ])

  const todosFromSlice = useSelector(state=>state.todo.todosList)

  useEffect(()=>{
   localStorage.setItem("todos",JSON.stringify(todosFromSlice))
  },[todosFromSlice])

  const addTodo=(todoName)=>{
    const todoObject = {
      name: todoName,
      completed: false
    }

    const todosList = [...todos]
    todosList.push(todoObject)

    setTodos(todosList)

  }

  const markCompleted=(todoName)=>{
    const newList = todos.map(todo=>{
      if(todo.name===todoName){
        return {
          name:todo.name,
          completed: !todo.completed
        }
      }
      else{
        return todo
      }
    })
    setTodos(newList)
  }

  return (
     <div className="todos-container">
       <Header addTodo={addTodo}/>
        <hr />
        <TodoList showModal={showModal} markCompleted={markCompleted} todos={todosFromSlice}/>
     
        <Modal title="Modify Todo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Input value={newTodoName} onChange={(e)=>setNewTodoName(e.target.value)} placeholder="Basic usage" />
        </Modal>
       
     </div>
  );
}

export default TodoPage;
