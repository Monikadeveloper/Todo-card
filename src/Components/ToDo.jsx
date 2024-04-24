import React, { useState, useEffect } from 'react'
import './ToDo.css'
import './About'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, editToDo } from '../features/TodoSlice'

const ToDo = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const [inputData, setInputData] = useState('')
  const [editList, setEditList] = useState(false)
  const [editTodo, setEditTodo] = useState('')
  const [editvalue, setEditvalue] = useState()

  const AddToDo = (e) => {
    e.preventDefault()
    dispatch(addTodo(inputData))
    setInputData('')
  }

  const edittodo = (todo) => {
    setEditList(true)
    setEditTodo(todo)
    setEditvalue(editTodo.todo)
  }
  const handleEdit = (e) => {
    e.preventDefault()
    const editObj = {
      id: editTodo.id,
      text: editvalue,
    }
    dispatch(editToDo(editObj))
    setEditList(false)
  }

  return (
    <>
      <div className="main1">
        <nav>
          <ul className="uli">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <Link to="/">
              <button type="button" className="btn btn-primary" id="btn">
                Logout
              </button>
            </Link>
          </ul>
          {/* <p>{location.state.data}</p> */}
        </nav>
        <div className="input-group mb-3">
          {editList === false ? (
            <input
              type="text"
              className="form-control"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value)
              }}
              placeholder="Enter your todo here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          ) : (
            <input
              type="text"
              className="form-control"
              value={editvalue || ''}
              onChange={(e) => {
                setEditvalue(e.target.value)
              }}
              placeholder="Enter your todo here"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          )}
          {editList === false ? (
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={AddToDo}
            >
              Add Task
            </button>
          ) : (
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={handleEdit}
            >
              Update
            </button>
          )}
        </div>
        <div className="list-item">
          <ul>
            {todos.map((todo) => {
              return (
                <li className="list-group-item" key={todo.id}>
                  {todo.text}
                  <div className="btndiv">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        dispatch(removeTodo(todo.id))
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        edittodo(todo)
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default ToDo
