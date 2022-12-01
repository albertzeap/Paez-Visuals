import React, { useState } from "react";
// import { motion } from "framer-motion";
import { WorkCard } from "./WorkCard";

export const WorkSlider = ({projects}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === projects.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const arrowStyles = {    
        fontSize: "45px",
    };

    return (
        <>
                <div className="container">
                    <WorkCard project={projects[currentIndex]} />
                </div>
                <br/>
                <div className="container is-flex is-justify-content-space-between	">
                    <div className="button has-text-white is-ghost" onClick={goToPrevious} style={arrowStyles} >{'<'}</div>
                    <div className="button has-text-white is-ghost" onClick={goToNext} style={arrowStyles}>{'>'}</div>
                </div>
                <h1 className="subtitle has-text-centered"><strong className="has-text-primary">{projects[currentIndex].name}</strong></h1>
        </>
    );
}