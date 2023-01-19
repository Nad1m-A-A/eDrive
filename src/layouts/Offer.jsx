import React from 'react'
import offerImg from '../assets/images/offer.png'
import classes from '../assets/styles/Main.module.css'

function Offer() {
    return (
        <section className={classes.offer}>
            <div className={classes.offer_container}>
                <h2>Do You Want To Receive <br/> Special Offers?</h2>
                <p>
                Be the first to receive all the information about our 
                products and new cars by email by subscribing to our 
                mailing list.
                </p>
                <div><button>Subscribe Now</button></div>
                <img src={offerImg} draggable="false" alt="White Porsche" />
            </div>
        </section>
    )
}

export default Offer