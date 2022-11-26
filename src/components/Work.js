import { motion } from "framer-motion";
import React ,{useRef, useState, useEffect} from "react";
import Transition from "./Transition";
import { WorkCard } from "./WorkCard";
import { WorkSlider } from "./WorkSlider";

import {Link} from "react-router-dom";


const projects = [
    {
        name: "Rene and Monica Wedding Highlight",
        url: "https://images.unsplash.com/photo-1548197253-652ffe79752c"

    },
    {
        name: "LifeTeen Summer Camp Weekly Recap",
        url: ""
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
    // style={{writingMode: "vertical-rl", textOrientation: "upright"}}

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
                                    {/* <h1 className="title has-text-centered has-text-white is-uppercase">Portfolio</h1> */}
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