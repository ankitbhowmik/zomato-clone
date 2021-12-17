import React from 'react'
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

import navbarStyle from "../../styles/index/navbar.module.css";

const NavbarInput = () => {
    return (
        <div className={navbarStyle.header}>
            <div className="flex-center">
                <HiLocationMarker color="hotpink" size={25} />
                <input placeholder="Connaught Place" className={navbarStyle.input} />
                <AiFillCaretDown />
            </div>
            <div className="flex-center">
                <FiSearch size={22} />
                <input placeholder="Search for resturant, cuisine or a dish" className={navbarStyle.input} style={{ flex: 1 }} />
            </div>
        </div>
    )
}

export default NavbarInput
