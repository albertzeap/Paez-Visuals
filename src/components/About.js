import React from "react";
import Transition from "./Transition";

export const About = () => {
    return (
        <>
            <Transition>

                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className=" container has-text-centered">
                            <h1 className="title has has-text-white">I am a freelance videographer and editor based in California.</h1>
                        </div>
                    </div>
                </section>
            </Transition>
        </>
    );
}