import React from "react";
import backgroundVideo from "../assets/videobackground.mp4"

export const Background = () => {
    return(
        <video id="background-video" autoPlay loop muted poster={backgroundVideo} style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                position: "fixed",
                left: "0",
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: -1,
            }}>
            <source src={backgroundVideo} type="video/mp4"/>
            </video>
    );
}