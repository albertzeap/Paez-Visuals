import React from "react";
import { Link } from "react-router-dom";

export const TopNav = () => {
    return (
        <nav className="navbar is-transparent is-fixed top"> */
            <div className="navbar-brand">
                <Link to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" alt=""/>
                </Link>
            </div> 
        </nav> 
    );
}