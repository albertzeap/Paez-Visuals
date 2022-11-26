import React from "react";
import { Link } from "react-router-dom";

export const BottomNav = () => {
    return (
            <nav className="tabs is-boxed is-fullwidth-with-navbar">
                <div className="container is-flex is-justify-content-space-evenly is-flex-wrap-wrap">
                    <Link className="is-italic"  to="/">01-Home</Link>
                    <Link className="is-italic"  to="/about">02-About</Link>
                    <Link className="is-italic"  to="/work">03-Work</Link>
                    <Link className="is-italic"  to="/services">04-Services</Link>
                    <Link className="is-italic"  to="/gear">05-Gear</Link>
                    <Link className="is-italic"  to="/contact">06-Contact</Link>
                </div>
            </nav>
    );
}