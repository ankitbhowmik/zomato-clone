import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

import NavbarInput from './NavbarInput'
import navbarStyle from "../../styles/index/navbar.module.css";

const Navbar = () => {
    return (
        <nav className={"container " + navbarStyle.nav}>
            <AiOutlineMenu size={30} color="#000" className={navbarStyle.menu} />
            <img src="/assets/logo_dark.png" className={navbarStyle.navLogo} />
            <NavbarInput />
            <div className={navbarStyle.navButtons}>
                <span>Log in</span>
                <span style={{ marginLeft: 15 }}>Sign up</span>
            </div>
        </nav>
    )
}

export default Navbar
