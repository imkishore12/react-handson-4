import React from 'react'
import { BrowserRouter, NavLink ,Routes,Route} from 'react-router-dom'
import Home from './Home'

import AddNew from './AddNewCompo'
import EditCompo from './EditCompo'
import Contact from './Contact'
import Student from './Student'




export default function Navbar() {
  return (
    <header>
      <nav className='navbar'>
      
      
        <NavLink to='/' className="NavLink">Home</NavLink>
        <NavLink to='/student' className="NavLink">Student</NavLink>
        <NavLink to='/contact' className="NavLink">Contact</NavLink>
    </nav>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student/>} />


        



        <Route path='/student-desc' element={<AddNew/>} />

        <Route path='/student-desc/:ID' element={<EditCompo/>}/>

        

        <Route path='/contact' element={<Contact />} />
      </Routes>
    
        
      
    </header>
  )
}