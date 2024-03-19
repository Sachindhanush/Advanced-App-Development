import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./Components/login"
import Register from './Components/register'
import HomePage from './Components/homepage'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Products from './Components/Products'
import Payment from './Components/Pay'
import Handbag from './Components/Handbag'
import Watch from './Components/Watch'
import Customize from './Components/Customize'
import Cart from './Components/Cart'
import Data from './Components/Data'




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/NAV' element={<Navbar />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/side' element={<Sidebar />} />
          <Route path='/pro' element={<Products />} />
          <Route path='/pay' element={<Payment />} />
          <Route path='/hand' element={<Handbag />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/cus' element={<Customize />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/data' element={<Data />} />
        


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
