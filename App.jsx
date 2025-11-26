import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './AddStudent.css'
import './ViewStudent.css'
import './EditStudent.css'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from './AddStudent'
import ViewStudent from './ViewStudent'
import Home from './Home'
import EditStudent from './EditStudent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {
  

  return (
    <>
   
     
     <br></br>
<BrowserRouter>
  <div className="nav-links">
    <Link to="/" className="btn btn-outline-primary">Home</Link>
    <Link to="/addstudent" className="btn btn-outline-primary">Register</Link>
    <Link to="/viewstudent" className="btn btn-outline-primary">StudentList</Link>
  </div>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addstudent' element={<AddStudent/>}/>
    <Route path='/viewstudent' element={<ViewStudent/>}/>
    <Route path="/edit/:id" element={<EditStudent />} /> {/* ✅ moved here */}
  </Routes>
</BrowserRouter>


    </>
  )
}

export default App

