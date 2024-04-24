import React from 'react'
import './About.css'
import { Link, useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <>
      <div className="main2">
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
            {/* <p>{location.state.data}</p> */}
          </ul>
        </nav>
        <h4>About us</h4>
        <p>
          A to-do list is a list of items that need to be completed. The items
          on the list can range from simple activities like replying to an
          email, to more complex tasks like creating project briefs. They list
          everything that you have to do, with the most important tasks at the
          top of the list, and the least important tasks at the bottom. By
          keeping such a list, you make sure that your tasks are written down
          all in one place so you don't forget anything important.
        </p>
      </div>
    </>
  )
}

export default About
