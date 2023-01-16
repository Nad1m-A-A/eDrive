import React from 'react'
import classes from '../assets/styles/Main.module.css'
import aboutImg from '../assets/images/about.png'


function About() {
    return (
        <section className={classes.about} id="about">
            <div className={classes.about_container}>
                <div className={classes.img_holder}>
                    <img src={aboutImg} alt="A look inside a Porsche car"/>
                    <div className={classes.img_overlay}>
                        <h3>2.500+</h3>
                        <p>Supercharges placed along popular routes</p>
                    </div>
                </div>
                <div className={classes.description}>
                    <h3>Machines With <br/> Future Technology</h3>
                    <p>See the future with high-performance electric cars produced by 
                    renowned brands. They feature futuristic builds and designs with 
                    new and innovative platforms that last a long time.</p>
                    <button>Know more</button>
                </div>
            </div>
        </section>
    )
}

export default About