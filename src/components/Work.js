import React from "react";
import Transition from "./Transition";
import { WorkSlider } from "./WorkSlider";
import { Helmet } from "react-helmet-async";

const projects = [
    {
        name: "Rene and Monica Wedding Highlight",
        url: "https://www.youtube.com/embed/qPy3Z97zzkA"

    },
    {
        name: "LifeTeen Summer Camp Weekly Recap",
        url: "https://www.youtube.com/embed/96mxTgGyKnc"
    },
    {
        name: "Hawaii Travel Video",
        url: "https://www.youtube.com/embed/_1O5gGJHW1A"
    },
    {
        name: "Cooking Highlight Reel",
        url: "https://www.youtube.com/embed/C7V8C_64tgM"
    },
    {
        name: "Renewal of Vows Event Recap",
        url: "https://www.youtube.com/embed/s2f7-QG5foo"
    },
];



export const Work = () => {

    return (
        <>
            <Helmet>
                <title>Work</title>
                <meta name="description" content="Check out my work with wedding videos, highlight reels, etc."/>
                <link rel="canonical" href="/work"/>
            </Helmet>
            <Transition>
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column"></div>
                                <div className="column">
                                    <WorkSlider projects={projects}/>
                                </div>
                                <div className="column"></div>
                            </div>
                        
                          
                        </div>
                    </div>
                </section>
            </Transition>
        </>
    );
}