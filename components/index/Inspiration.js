import React from 'react';
import styles from "../../styles/index/inspiration.module.css";
import Slider from '../common/Slider/Slider';

const Suggestion = () => {
    const data = [
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
        { imgSrc: "/assets/pizza.jpeg", title: "pizza" },
    ]

    return (
        <section className={styles.jumbotron}>
            <div className="container">
                <p className="title">Inspiration for your first order</p>
                <Slider data={data} />
            </div>
        </section>
    )
}

export default Suggestion
