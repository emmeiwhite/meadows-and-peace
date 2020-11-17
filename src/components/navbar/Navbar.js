import React from 'react'
import Rainbow from './../../hoc/Rainbow'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({logo}) => {
    return (
        <div>
            <ul className="main-navigation">
                <li>
                    {logo}
                </li>
                <li>
                    <Link to="/" >Home</Link >
                </li>
                <li>
                    <Link to="/ninjaz" >Ninjas</Link >
                </li>
                <li>
                    <Link to="/posts" >Posts</Link >
                </li>
            </ul>
        </div>
    )
}

export default Rainbow(Navbar)