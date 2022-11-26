import React from "react";
import { Link } from "react-router-dom";

export const BottomNav = () => {
    return (
        // <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth-with-navbar">

                <div className="container is-flex is-justify-content-space-evenly">
                    <Link  to="/">01-Home</Link>
                    <Link  to="/about">02-About</Link>
                    <Link  to="/work">03-Work</Link>
                    <Link  to="/services">04-Services</Link>
                    <Link  to="/gear">05-Gear</Link>
                    <Link  to="/contact">06-Contact</Link>
                </div>
            </nav>
        // </div>
    );
}