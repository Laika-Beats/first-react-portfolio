import React from 'react'
import "./navbar.scss"

const Navbar = () => {
    return (
        <header className = {navbarClasses.join(" ")}>
            <div>
                <p>Joshua Elliot Thompson</p>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Connect</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar