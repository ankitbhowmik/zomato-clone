import React from 'react'
import Slider from '../common/Slider/Slider'

const Brands = () => {
    const data = [
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
        { imgSrc: "/assets/dominos.jpeg", title: "Dominos" },
    ]

    return (
        <div className="container">
            <p className="title">Top Brands for you</p>
            <Slider data={data} imgStyle={{ minWidth: 150 }} />
        </div>
    )
}

export default Brands
