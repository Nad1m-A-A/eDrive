import React, { useState } from 'react'
import tesla from '../assets/images/logo3.png'
import porsche from '../assets/images/logo1.png'
import audi from '../assets/images/logo2.png'
import teslaCar1 from '../assets/images/featured1.png'
import teslaCar2 from '../assets/images/featured2.png'
import audiCar from '../assets/images/featured3.png'
import porscheCar1 from '../assets/images/featured4.png'
import porscheCar2 from '../assets/images/featured5.png'

import Card from '../components/Card'
import classes from '../assets/styles/Main.module.css'

function Featured() {
    const featuredGroup = [
        {
            img: teslaCar1,
            title: 'Tesla',
            subtitle: 'Model X',
            price: '$98,900',
        },
        {
            img: teslaCar2,
            title: 'Tesla',
            subtitle: 'Model 3',
            price: '$45,900',
        },
        {
            img: audiCar,
            title: 'Audi',
            subtitle: 'E-tron',
            price: '$175,900',
        },
        {
            img: porscheCar1,
            title: 'Porsche',
            subtitle: 'Boxster 987',
            price: '$126,900',
        },
        {
            img: porscheCar2,
            title: 'Porsche',
            subtitle: 'Panamera',
            price: '$126,900',
        },
    ]
    const [selectedGroup, setSelectedGroup] = useState(featuredGroup);
    const [activeGroup, setActiveGroup] = useState('all');

    function changeGroup(e) {
        const group = e.target.getAttribute('group');
        if(group === 'all') {
            setSelectedGroup(featuredGroup)
            setActiveGroup('all')
        } else {
            const newGroup = featuredGroup.filter(item => item.title.toLocaleLowerCase() === group)
            setSelectedGroup(newGroup);
            setActiveGroup(group)
        }
    }

    return (
        <section className={classes.featured} id="featured">
            <h2>Featured Luxury Cars</h2>
            <div className={classes.featured_container}>
                <ul>
                    <li onClick={changeGroup} group="all" className={activeGroup === 'all' ? classes.active : ''}>
                        ALL
                    </li>
                    <li onClick={changeGroup} className={activeGroup === 'tesla' ? classes.active : ''}>
                        <img src={tesla} alt="Tesla Brand" group="tesla"/>
                    </li>
                    <li onClick={changeGroup} className={activeGroup === 'porsche' ? classes.active : ''}>
                        <img src={porsche} alt="Porsche Brand" group="porsche"/>
                    </li>
                    <li onClick={changeGroup} className={activeGroup === 'audi' ? classes.active : ''}>
                        <img src={audi} alt="Audi Brand" group="audi"/>
                    </li>
                </ul>
                <div className={classes.featured_group}>
                    {selectedGroup.map((car, index) => {
                        return <Card key={index} img={car.img} title={car.title} subtitle={car.subtitle} price={car.price}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Featured

