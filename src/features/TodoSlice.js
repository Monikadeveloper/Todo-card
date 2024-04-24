import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}
const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getTime(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editToDo: (state, action) => {
      const updatedArray = []
      state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id
          item.text = action.payload.text
        }
        updatedArray.push(item)

        return updatedArray
      })
    },
  },
})

export default TodoSlice.reducer
export const { addTodo, removeTodo, editToDo } = TodoSlice.actions
