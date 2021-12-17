import React from 'react';
import { FaListUl } from "react-icons/fa";
import { BsArrowDownUp } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fa";

import filterStyle from "../../styles/index/filterChips.module.css";

const FilterChips = () => {

    const filters = [
        { icon: FaListUl, text: "Filters" },
        { icon: BsArrowDownUp, text: "Delivery Time" },
        { icon: null, text: "Pure Veg" },
        { icon: null, text: "Ratings: 4.0+" },
        { icon: FiChevronDown, text: "Greate Offers" },
    ]

    return (
        <section className={filterStyle.stickyFilters}>
            <div className={"container " + filterStyle.filterChips}>
                {
                    filters.map(item => (
                        <Chip key={item.text} icon={item.icon} text={item.text} />
                    ))
                }
            </div>
        </section>
    )
}

const Chip = ({ icon, text }) => {
    const IconComponent = icon;
    return (
        <div className={filterStyle.chip}>
            {IconComponent && <IconComponent />} &nbsp;
            {text}
        </div>
    )
}

export default FilterChips
