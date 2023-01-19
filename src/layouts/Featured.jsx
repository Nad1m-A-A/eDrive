
import React, { useState, useEffect, useMemo, useRef } from 'react'
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
    const featuredGroup = useMemo(() => {
    return [
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
}, [])

    const [selectedGroup, setSelectedGroup] = useState(featuredGroup);
    const [activeButton, setActiveButton] = useState('all');
    const [cardClasses, setCardClasses] = useState('');
    const ref = useRef(true)
    useEffect(() => {
        const firstRun = ref.current
        if(firstRun) {
            ref.current = false;
        } else {
            setCardClasses(classes.fade_out);
            setTimeout(() => {
            setSelectedGroup([]);
            }, 300) // 300 is the time of the fade_out animation (let the fade_out finish then clear the state)
            setTimeout(() => {
                if(activeButton === 'all') {
                    setSelectedGroup(featuredGroup)
                    setCardClasses(classes.fade_in)
                }
                if (activeButton === 'tesla') {
                    setSelectedGroup(featuredGroup.filter(item => item.title.toLocaleLowerCase() === 'tesla'))
                    setCardClasses(classes.fade_in)

                    
                }
                if (activeButton === 'porsche') {
                    setSelectedGroup(featuredGroup.filter(item => item.title.toLocaleLowerCase() === 'porsche'))
                    setCardClasses(classes.fade_in)
                    
                }
                if (activeButton === 'audi') {
                    setSelectedGroup(featuredGroup.filter(item => item.title.toLocaleLowerCase() === 'audi'))
                    setCardClasses(classes.fade_in)
                }
            }, 300)
        }
    },[featuredGroup, activeButton])

    return (
        <section className={classes.featured} id="featured">
            <h2>Featured Luxury Cars</h2>
            <div className={classes.featured_container}>
                <ul>
                    <li onClick={() => setActiveButton('all')} group="all" className={activeButton === 'all' ? classes.active : ''}>
                        ALL
                    </li>
                    <li onClick={() => setActiveButton('tesla')} className={activeButton === 'tesla' ? classes.active : ''}>
                        <img src={tesla} alt="Tesla Brand" group="tesla"/>
                    </li>
                    <li onClick={() => setActiveButton('porsche')} className={activeButton === 'porsche' ? classes.active : ''}>
                        <img src={porsche} alt="Porsche Brand" group="porsche"/>
                    </li>
                    <li onClick={() => setActiveButton('audi')} className={activeButton === 'audi' ? classes.active : ''}>
                        <img src={audi} alt="Audi Brand" group="audi"/>
                    </li>
                </ul>
                <div className={classes.featured_group}>
                    {selectedGroup.map((car, index) => {
                        return <Card className={cardClasses} key={index} img={car.img} title={car.title} subtitle={car.subtitle} price={car.price}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Featured