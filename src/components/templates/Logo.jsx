import "./Logo.css";
import React from "react";
import Logo from "../../assets/imgs/logo.png"

export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="Logo" />
        </a>
    </aside>;
