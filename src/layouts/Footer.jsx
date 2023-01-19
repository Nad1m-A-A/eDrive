import React from 'react'
import classes from '../assets/styles/Main.module.css'
import logo from '../assets/images/favicon.png'

import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

function Footer() {
    return (
        <section className={classes.footer}>
            <div className={classes.footer_container}>
                <div className={classes.introduction}>
                    <div className={classes.logo_wrapper}>
                        <div><img src={logo} draggable="false" alt={'logo'}></img></div>
                        <span>eDrive</span>
                    </div>
                    <p>
                        We offer the best electric cars of <br/> 
                        the most recognized brands in <br/> 
                        the world.
                    </p>
                </div>
                <div className={classes.company}>
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Cars</li>
                        <li>History</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className={classes.info}>
                    <h3>Information</h3>
                    <ul>
                        <li>Request a quote</li>
                        <li>Find a dealer</li>
                        <li>Contact us</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className={classes.socials}>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><FaFacebookF/></li>
                        <li><BsInstagram/></li>
                        <li><BsTwitter/></li>
                    </ul>
                </div>
            </div>
            <div className={classes.rights}>
                &#169; All rigths reserved
            </div>
        </section>
    )
}







export default Footer