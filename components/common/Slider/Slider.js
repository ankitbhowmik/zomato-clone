import React from 'react';
import styles from "./slider.module.css";

const Slider = ({ data, imgStyle }) => {

    return (
        <div className={styles.sliders}>
            {
                data.map((item, index) => (
                    <SlideItem key={index} imgSrc={item.imgSrc} title={item.title} imgStyle={imgStyle} />
                ))
            }
        </div>
    )
}

const SlideItem = ({ imgSrc, title, imgStyle }) => {
    return (
        <div className={styles.slideItem}>
            <div className={styles.imgContainer} style={imgStyle}>
                <img src={imgSrc} className="responsive-img" />
            </div>
            <p>{title}</p>
        </div>
    )
}

export default Slider
