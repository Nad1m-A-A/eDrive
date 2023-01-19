import React from 'react'
import logo1 from '../assets/images/logo1.png'
import logo2 from '../assets/images/logo2.png'
import logo3 from '../assets/images/logo3.png'
import logo4 from '../assets/images/logo4.png'
import logo5 from '../assets/images/logo5.png'
import logo6 from '../assets/images/logo6.png'
import classes from '../assets/styles/Main.module.css'

function Logos() {
    return (
        <section className={classes.logos}>
            <div className={classes.logos_container}>
                <img src={logo1} draggable="false" alt="Porsche Brand"/>
                <img src={logo2} draggable="false" alt="Audi Brand"/>
                <img src={logo3} draggable="false" alt="Tesla Brand"/>
                <img src={logo4} draggable="false" alt="Lamborghini Brand"/>
                <img src={logo5} draggable="false" alt="BMW Brand"/>
                <img src={logo6} draggable="false" alt="Mitsubishi Brand"/>
            </div>
        </section>
    )
}

export default Logos