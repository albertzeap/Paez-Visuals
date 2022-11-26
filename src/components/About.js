import React from "react";
import { BottomNav } from "./BottomNav";

export const About = () => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className=" container has-text-centered">
                    <h1 className="title has has-text-white">I am a freelance videographer and editor based in California.</h1>
                </div>
            </div>
            <BottomNav/>
        </section>
    );
}