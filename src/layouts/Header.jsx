import React from 'react'
import classes from '../assets/styles/Main.module.css'

function Header() {
    return (
        <header>
            <nav className={classes.container}>
                <div className={'nav_logo_wrapper'}>
                </div>
                <ul className={classes.nav_ul}>
                    <li className={'nav_link'}>Hello</li>
                    <li className={'nav_link'}>Hello</li>
                    <li className={'nav_link'}>Hello</li>
                    <li className={'nav_link'}>Hello</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header