
import './App.css'
import UserProfile from './pages/UserProfile'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Hero from './pages/Hero'
import Products from './pages/Products'
import Card from './components/Card'
import { BrowserRouter,Route , Routes } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Card/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
