import React from 'react'
import classes from '../assets/styles/Main.module.css'
import carImg from '../assets/images/features.png'
import mapSVG from '../assets/images/map.svg'

function Extra() {
    return (
        <section className={classes.features}>
                <h2>More Features</h2>
            <div className={classes.features_container}>
                <div className={classes.car_img_holder}>
                    <img src={carImg} draggable="false" alt="map"/>
                    <div className={`${classes.features_card1} ${classes.features_card}`}>
                        <h3>350</h3>
                        Km <br/> Range
                    </div>
                    <div className={`${classes.features_card2} ${classes.features_card}`}>
                        <h3>480</h3>
                        Km <br/> Travel
                    </div>
                    <div className={`${classes.features_card3} ${classes.features_card}`}>
                        <h3>800v</h3>
                        Turbo <br/> Chargin
                    </div>
                </div>
            </div>
            <img className={classes.map_img} src={mapSVG} draggable="false" alt="map"/>
        </section>
    )
}

export default Extra