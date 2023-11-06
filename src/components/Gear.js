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
                                        <li>Zhiyun Crane 2</li>
                                        <li>Takstar SGC-598</li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Lenses</h1>
                                    <ul className="has-text-primary">
                                        <li>Canon 50MM/F1.8</li>
                                        <li>Canon 18-55MM/F3.5-5.6</li>
                                        <li>Rokinon 24MM/F1.4</li>
                                        <li>Tamron SP Di 24-70MM/F2.8</li>
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
                </section>
            </Transition>
        </>
    );
}