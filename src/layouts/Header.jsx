import React, { useEffect, useRef, useState } from 'react'
import classes from '../assets/styles/Main.module.css'
import logo from '../assets/images/favicon.png'
import {FaBars} from 'react-icons/fa'
import {IoIosExit} from 'react-icons/io'
import {Link as SmoothLink} from 'react-scroll'

function Header() {
    const [navigating, setNavigating] = useState(false)
    const [ulClass, setUlClass] = useState(classes.invisible);
    const [overlayClass, setOverlayClass] = useState(classes.invisible);
    const ref = useRef(true);
    useEffect(() => {
        if(ref.current) {
            ref.current = false
        } else {
            setUlClass(classes.fade_out)
            setOverlayClass(classes.fade_out)
            setTimeout(() => {
                setUlClass(classes.invisible)
                setOverlayClass(classes.invisible)
            }, 500)
        }
    }, [navigating])

    return (
        <header>
            <nav className={classes.container}>
                <div className={classes.nav_logo_wrapper}>
                    <div><img src={logo} draggable="false" alt={'logo'}></img></div>
                    <span>eDrive</span>
                </div>
                {!navigating && <FaBars onClick={() => setNavigating(true)} className={classes.menu_bar}/>}
                {navigating && <IoIosExit onClick={() => setNavigating(false)} className={`${classes.menu_bar} ${classes.exit_icon}`}/>}
                <div onClick={() => setNavigating(false)} className={`${navigating ? classes.visible : overlayClass} ${classes.overlay}`}></div>
                <ul className={navigating ? classes.visible : ulClass}>
                    <li className={classes.nav_link}><SmoothLink onClick={() => setNavigating(false)} to="home" spy={true} smooth={true} offset={-60} duration={500}>Home</SmoothLink></li>
                    <li className={classes.nav_link}><SmoothLink onClick={() => setNavigating(false)} to="about" spy={true} smooth={true} offset={-60} duration={500}>About</SmoothLink></li>
                    <li className={classes.nav_link}><SmoothLink onClick={() => setNavigating(false)} to="popular" spy={true} smooth={true} offset={-60} duration={500}>Popular</SmoothLink></li>
                    <li className={classes.nav_link}><SmoothLink onClick={() => setNavigating(false)} to="featured" spy={true} smooth={true} offset={-30} duration={500}>Featured</SmoothLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

