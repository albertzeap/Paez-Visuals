import React from "react";
import { BottomNav } from "./BottomNav";


export const Home = () => {
    return (
        
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1 is-uppercase has-text-white is-italic">Paez Visuals</h1>
                    <p className="subtitle">Freelance Videographer and Editor</p>
                </div>
            </div>
            <BottomNav/>
        </section>
   
    );
}