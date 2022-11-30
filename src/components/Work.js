import { motion } from "framer-motion";
import React ,{useRef, useState, useEffect} from "react";
import Transition from "./Transition";
import { WorkCard } from "./WorkCard";
import { WorkSlider } from "./WorkSlider";

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
        url: ""
    },
    {
        name: "Event",
        url: ""
    },
    {
        name: "MFC Echo Conference Recap",
        url: ""
    },
];



export const Work = () => {

    return (
        <>
            <Transition>
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <div className="container is-fluid">
                                <div className="columns">
                                <div className="column is-one-third">
                                </div>    
                                <div className="column is-one-third">
                                    <WorkSlider projects={projects}/>
                                </div>    
                                <div className="column is-one-third"></div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Transition>
        </>
    );
}