import React from 'react'
import classes from '../assets/styles/Main.module.css'
import Card from '../components/Card'
import popular1 from '../assets/images/popular1.png';
import popular2 from '../assets/images/popular2.png';
import popular3 from '../assets/images/popular3.png';
import popular4 from '../assets/images/popular4.png';
import popular5 from '../assets/images/popular5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function popular() {
    const popularCollection = [
        {
            img: popular1,
            subtitle: 'Turbo S',
            price: '$175,900',
        },
        {
            img: popular2,
            subtitle: 'Taycan',
            price: '$114,900',
        },
        {
            img: popular3,
            subtitle: 'Turbo S Cross',
            price: '$150,900',
        },
        {
            img: popular4,
            subtitle: 'Boxster 718',
            price: '$125,900',
        },
        {
            img: popular5,
            subtitle: 'Cayman',
            price: '$128,900',
        },
    ]
    return (
        <section className={classes.popular} id="popular">
            <div className={classes.popular_container}>
                <h2>Choose Your Electric Car <br/> Of The Porsche Brand</h2>
                <Swiper
                className={classes.cards_holder} 
                spaceBetween={-50}
                loop={true}
                grabCursor={true}
                slidesPerView={2}
                centeredSlides={true}
                pagination={
                    {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                }
                modules={[Pagination]}
                breakpoints={{
                    340: {
                        width: 340,
                        slidesPerView: 1.1,
                    },
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2.3,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2.9,
                    },
                }}
                >
                    {popularCollection.map((car, index) => {
                        return <SwiperSlide key={index}><Card img={car.img} subtitle={car.subtitle} price={car.price}/></SwiperSlide>
                    })}
                    <div className={`swiper-pagination ${classes.pagination}`}></div>
                </Swiper>
            </div>
        </section>
    )
}

export default popular


/*
import React from 'react'
import classes from '../assets/styles/Main.module.css'
import Card from '../components/Card'
import popular1 from '../assets/images/popular1.png';
import popular2 from '../assets/images/popular2.png';
import popular3 from '../assets/images/popular3.png';
import popular4 from '../assets/images/popular4.png';
import popular5 from '../assets/images/popular5.png';

function popular() {
    const popularCollection = [
        {
            img: popular1,
            subtitle: 'Turbo S',
            price: '$175,900',
        },
        {
            img: popular2,
            subtitle: 'Taycan',
            price: '$114,900',
        },
        {
            img: popular3,
            subtitle: 'Turbo S Cross',
            price: '$150,900',
        },
        {
            img: popular4,
            subtitle: 'Boxster 718',
            price: '$125,900',
        },
        {
            img: popular5,
            subtitle: 'Cayman',
            price: '$128,900',
        },
    ]
    return (
        <section className={classes.popular} id="popular">
            <div className={classes.popular_container}>
                <h2>Choose Your Electric Car <br/> Of The Porsche Brand</h2>
                <div className={classes.cards_holder}>
                    {popularCollection.map((car, index) => {
                        return <Card img={car.img} subtitle={car.subtitle} price={car.price}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default popular
*/