import './App.css'
import About from './Components/About'

import Navbar from './Components/Navbar'
import ToDo from './Components/ToDo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ToDo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
