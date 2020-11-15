import React from 'react'
import Rainbow from './../../hoc/Rainbow'
import './Navbar.css'

const Navbar = ({logo}) => {
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

export default Rainbow(Navbar)