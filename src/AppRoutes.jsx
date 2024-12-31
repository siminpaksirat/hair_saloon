import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Book from './pages/Book.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import Services from './pages/Services.jsx'
import Navbar from './components/Navbar.jsx';

function AppRoutes() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/book' element={<Book/>}/>
    <Route path='/myappointments' element={<MyAppointments/>}/>
  </Routes>
  </>
  )
}

export default AppRoutes
