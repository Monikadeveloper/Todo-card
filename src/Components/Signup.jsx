import React from 'react'
import './Signup.css'

import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className="main3">
        <div className="main4">
          <h3>Sign up</h3>
          <div
            class="mb-3"
            style={{
              padding: '30px',
            }}
          >
            <form>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your username"
                style={{ width: '400px' }}
              />
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter your email"
                style={{ width: '400px' }}
              />
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter your contact number"
                style={{ width: '400px' }}
              />
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Enter your password"
                style={{ width: '400px' }}
              />
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Confirm password"
                style={{ width: '400px' }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                }}
              >
                <Link to="/login">
                  <button type="button" className="btn btn-info">
                    Signup
                  </button>
                </Link>
                <Link to="/login">
                  <button type="button" className="btn btn-info">
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
