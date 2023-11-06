import React, { useState } from "react";
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
        fontSize: "3rem",
    };

    return (
        <>
                
                <h1 className="subtitle has-text-centered"><strong className="has-text-primary">{projects[currentIndex].name}</strong></h1>
                <div className="level">
                    <div className="button has-text-white is-ghost level-item" onClick={goToPrevious} style={arrowStyles} >{'<'}</div>
                    <div className="level-item">
                        <WorkCard project={projects[currentIndex]} />
                    </div>
                    <div className="button has-text-white is-ghost level-item" onClick={goToNext} style={arrowStyles}>{'>'}</div>
                </div>
        </>
    );
}