import React from 'react'
import './Navbar.css'

export default function Navbar({logo}) {
    return (
        <div>
            <ul className="main-navigation">
                <li>
                    {logo}
                </li>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
                <li>
                    <a>About</a>
                </li>
            </ul>
        </div>
    )
}
