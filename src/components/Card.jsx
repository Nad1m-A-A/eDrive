import React from "react";
import classes from "../assets/styles/Main.module.css";
import {BsSpeedometer2} from 'react-icons/bs'
import {MdStackedLineChart, MdOutlineElectricalServices} from 'react-icons/md'
import {FaHandshake} from 'react-icons/fa'

function Card(props) {
    return (
        <div className={classes.card}>
            <div className={`${classes.shadow} ${classes.tiny_shadow}`}></div>
            <div className={classes.titles}>
                <h3>Porsche</h3>
                <h4>{props.subtitle}</h4>
            </div>
            <div className={classes.img_holder}>
                <img src={props.img} alt="Porsche car"/>
            </div>
            <div className={classes.features}>
                <div className={classes.feature}>
                    <BsSpeedometer2/>
                    <span>3.7 Sec</span>
                </div>
                <div className={classes.feature}>
                    <MdStackedLineChart/>
                    <span>356 Km/h</span>
                </div>
                <div className={classes.feature}>
                    <MdOutlineElectricalServices/>
                    <span>Electric</span>
                </div>
            </div>
            <div className={classes.price}>
                <span>{props.price}</span>
            </div>
            <div className={classes.deal_icon_holder}>
                <FaHandshake/>
            </div>
        </div>
    );
}

export default Card;
