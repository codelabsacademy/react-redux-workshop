import { createSlice} from '@reduxjs/toolkit'

const initialState={
    todosList: JSON.parse(localStorage.getItem("todos")) ||[]
    // [
    //     {
    //         name:"Buy groceries for next week",
    //         completed:false
    //     },
    //     {
    //         name:"Renew car insurance",
    //         completed:false
    //     },
    //     {
    //         name:"Sign up for online course",
    //         completed:false
    //     },
    //   ]
}


export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    editTodo: (state,action) => {
        console.log(action)
        const newList = state.todosList.map(todo=>{
            if(todo.name===action.payload.modifiedTodoName){
              return {
                name:action.payload.newTodoName,
                completed: todo.completed
              }
            }
            else{
              return todo
            }
          })
          state.todosList = newList
    },
    deleteTodo: (state,action) => {
        const newList = state.todosList.filter(todo=>todo.name!==action.payload)
        state.todosList = newList
    }
  },
})

// Action creators are generated for each case reducer function
export const { deleteTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
