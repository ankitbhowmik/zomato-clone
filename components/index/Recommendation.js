import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";

import styles from "../../styles/index/recommendation.module.css";

const Recommendation = () => {
    const data = [
        { imgSrc: "/assets/food-item.jpg", offer1: "pro extra 10% off", offer2: "50% off", time: "48 min", rating: "4.1", restaurantName: "North India, healthy food", pricePerOne: "₹200", itemName: "LunchBox" },
        { imgSrc: "/assets/food-item.jpg", offer1: "pro extra 10% off", offer2: "50% off", time: "48 min", rating: "4.1", restaurantName: "North India, healthy food", pricePerOne: "₹200", itemName: "LunchBox" },
        { imgSrc: "/assets/food-item.jpg", offer1: "pro extra 10% off", offer2: "50% off", time: "48 min", rating: "4.1", restaurantName: "North India, healthy food", pricePerOne: "₹200", itemName: "LunchBox" },
        { imgSrc: "/assets/food-item.jpg", offer1: "pro extra 10% off", offer2: "50% off", time: "48 min", rating: "4.1", restaurantName: "North India, healthy food", pricePerOne: "₹200", itemName: "LunchBox" }
    ]

    return (
        <section className="container">
            <div>
                <p className="title">Connaught Place Restaurants, New Delhi</p>
                <div className={styles.recommendations}>
                    {
                        data.map((item, index) => (
                            <FoodItem key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

const FoodItem = ({ imgSrc, offer1, offer2, time, rating, restaurantName, itemName, pricePerOne }) => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <img src={imgSrc} />
                <p className={styles.offer1}>{offer1}</p>
                <p className={styles.offer2}>{offer2}</p>
                <p className={styles.time}>{time}</p>
            </div>
            <div className="flex justify-flex-between align-item-center">
                <p>{itemName}</p>
                <div className={styles.rating}>{rating} <AiTwotoneStar /></div>
            </div>
            <div className="flex justify-flex-between">
                <p>{restaurantName}</p>
                <p>{pricePerOne} for One</p>
            </div>
        </div>
    )
}

export default Recommendation
