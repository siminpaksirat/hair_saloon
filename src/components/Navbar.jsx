import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Navbar() {
    const Navigate = useNavigate()
    const [token, setToken] = useState(true)



  return (
    <>
    <div className='px-10 flex items-center justify-between text-sm py-4 border-b border-b-gray-400'>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/services'>
                <li className='py-1'>SERVICES</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
            </NavLink>
            <NavLink to='/book'>
                <li>BOOK</li>
                <hr/>
            </NavLink>
            <NavLink to='/myappointments'>
                <li>MY APPOINTMENTS</li>
                <hr/>
            </NavLink>
        </ul>

        <div>
           <button>LOGIN</button>

        </div>

    </div>
    </>
  )
}

export default Navbar
