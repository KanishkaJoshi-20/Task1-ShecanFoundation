import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <nav className='h-15 flex items-center justify-between bg-blue-100'>
      <h1 className="text-xl font-bold">Fundraising Portal</h1>

      <div className=''>
      <NavLink to="/" className='m-8 hover:underline font-bold hover:text-blue-600'>Home</NavLink>
      <NavLink to="/dashboard"  className='m-8 hover:underline font-bold hover:text-blue-600'>Dashboard</NavLink>
      <NavLink to="/login" className="m-8 hover:underline font-bold hover:text-blue-600">Login</NavLink>
      <NavLink to="/leaderboard" className='m-8 hover:underline font-bold hover:text-blue-600'>LeaderBoard</NavLink>
    </div>

    </nav>
    </>
  )
}

export default NavBar