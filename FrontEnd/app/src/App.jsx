import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./Components/login"
import Register from './Components/register'
import HomePage from './Components/Navbar'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/NAV' element={<Navbar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
