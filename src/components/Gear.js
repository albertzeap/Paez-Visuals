import React from "react";
import Transition from "./Transition";

export const Gear = () => {
    return (
        <>
            <Transition>
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Equipment</h1>
                                    <ul className="has-text-primary">
                                        <li>Canon 80D</li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Lenses</h1>
                                    <ul className="has-text-primary">
                                        <li>Canon 50MM/F1.8</li>
                                        <li>Rokinon 24MM/F1.4</li>
                                        <li>Tamron 24-70MM/F2.8</li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Software</h1>
                                    <ul className="has-text-primary">
                                        <li>Adobe Premiere Pro</li>
                                        <li>Adobe After Effects</li>
                                        <li>Davinci Resolve</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <BottomNav/> */}
                </section>
            </Transition>
        </>
    );
}