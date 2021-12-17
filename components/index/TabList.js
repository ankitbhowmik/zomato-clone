import React from 'react';

import tabListStyle from "../../styles/index/tabList.module.css"

const TabList = () => {
    return (
        <section className={tabListStyle.grayBorderBottom}>
            <div className={"container " + tabListStyle.tablist}>
                <Tab imgsrc="/assets/scooter.png" name="Delivery" />
                <Tab imgsrc="/assets/dining.png" name="Dining Out" />
                <Tab imgsrc="/assets/nightout.png" name="Night life" />
            </div>
        </section>
    )
}

const Tab = ({ name, imgsrc }) => {
    return (
        <div className={tabListStyle.tabsContainer}>
            <div className={tabListStyle.tabs}>
                <img src={imgsrc} className="responsive-img" />
            </div>
            <p style={{ fontSize: "1.5rem" }}>{name}</p>
        </div>
    )
}

export default TabList
