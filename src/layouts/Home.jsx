import React from 'react'
import classes from '../assets/styles/Main.module.css'
import {GiElectric} from 'react-icons/gi'
import homeImg from '../assets/images/home.png'
import {BsThermometerLow, BsSpeedometer2} from 'react-icons/bs'
import {Link as SmoothLink} from 'react-scroll'

function Home() {
    return (
        <section className={classes.home} id="home">
            <div className={classes.home_container}>
            <div className={`${classes.shadow} ${classes.big_shadow_left}`}/>
            <div className={`${classes.shadow} ${classes.big_shadow_right}`}/>
                <div className={classes.heading}>
                    <h1>Choose The Best Car</h1>
                    <h3>Porsche Mission E</h3>
                    <h5>
                        <GiElectric/>
                        Electric Car
                    </h5>
                </div>

                <div className={classes.main_img_holder}>
                    <img src={homeImg} draggable="false" alt='White Porsche Car'/>
                </div>

                <div className={classes.features}>
                    <div className={classes.feature}>
                        <div className={classes.icon}>
                            <BsThermometerLow/>
                        </div>
                        <div className={classes.number}>
                            24&deg;
                        </div>
                        <div className={classes.description}>
                            TEMPERATURE
                        </div>
                    </div>
                    <div className={`${classes.feature} ${classes.middle}`}>
                        <div className={classes.icon}>
                            <BsSpeedometer2/>
                        </div>
                        <div className={classes.number}>
                            873
                        </div>
                        <div className={classes.description}>
                            MILEAGE
                        </div>
                    </div>
                    <div className={classes.feature}>
                        <div className={classes.icon}>
                            <GiElectric/>
                        </div>
                        <div className={classes.number}>
                            94%
                        </div>
                        <div className={classes.description}>
                            BATTERY
                        </div>
                    </div>
                </div>

                <div className={classes.start}>
                    <SmoothLink to="popular" spy={true} smooth={true} offset={-60} duration={500}>Start</SmoothLink>
                </div>
            </div>
        </section>
    )
}

export default Home