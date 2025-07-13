import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='fixed top-0 left-0 w-full z-50 bg-black'>
            <div className='container-fluid flex flex-row justify-between items-center bg-black text-white p-3'>
                <div className='ml-4 md:ml-7 text-2xl font-bold'>
                    <span>NeonNest</span>
                </div>
                {/* Hamburger menu for mobile */}
                <div className="md:hidden mr-4">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
                {/* Desktop menu */}
                <div className='hidden md:flex flex-row md:w-1/3 justify-around text-lg font-semibold'>
                    <Link to="/">Home</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contacts">Contacts</Link>
                </div>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-black text-white w-full flex flex-col items-center py-4 space-y-4 shadow-lg">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link>
                </div>
            )}
        </nav>
    )
}