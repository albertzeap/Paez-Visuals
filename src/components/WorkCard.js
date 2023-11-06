import React from "react";
// import { motion } from "framer-motion";
// import Transition from "./Transition";

export const WorkCard = ({project: {name, url}}) => {

    const iframeStyle = {
       
        height: "20rem",
        width: "20rem",
        resize: "none",
        overflow: "auto",
     
    }

    console.log(name);
    return (
        <>
            <div className="container is-flex is-justify-content-center">
                <iframe 
                    style={iframeStyle} 
                    src={url} 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </>
    );
}