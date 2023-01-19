import React from 'react'
import classes from '../assets/styles/Main.module.css'
import logo from '../assets/images/favicon.png'
import {FaBars} from 'react-icons/fa'

function Header() {
    return (
        <header>
            <nav className={classes.container}>
                <div className={classes.nav_logo_wrapper}>
                    <div><img src={logo} draggable="false" alt={'logo'}></img></div>
                    <span>eDrive</span>
                </div>
                <FaBars className={classes.menu_bar}/>
                <ul>
                    <li className={classes.nav_link}>Home</li>
                    <li className={classes.nav_link}>About</li>
                    <li className={classes.nav_link}>Popular</li>
                    <li className={classes.nav_link}>Featured</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header