import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputName, setInputName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (props) => {
    if (props.inputName === '' && props.password === '') {
      alert('Please Enter username and password')
    } else {
      console.log(inputName)
      navigate('/home', { state: { data: inputName } })
    }
  }

  return (
    <>
      <div className="main3">
        <div className="main4">
          <h3>Login</h3>
          <div
            class="mb-3"
            style={{
              padding: '30px',
            }}
          >
            <input
              type="text"
              className="form-control"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value)
              }}
              id="exampleFormControlInput1"
              placeholder="Enter your username"
              style={{ width: '400px' }}
            />
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput2"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder="Enter password"
              style={{ width: '400px' }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <Link to="/">
                <button type="button" className="btn btn-info">
                  Signup
                </button>
              </Link>

              <button
                type="button"
                className="btn btn-info"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
