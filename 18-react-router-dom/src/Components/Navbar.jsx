import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-between bg-blue-200 text-black font-semibold items-center px-20 py-5'> 
        <div className="text-xl"> Sheriyans </div>
        <div className='flex items-center text-xl gap-10'>
            <Link to="/"> home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Contact"> Contact us </Link>
        </div>
         </div>
    )
}

export default Navbar
