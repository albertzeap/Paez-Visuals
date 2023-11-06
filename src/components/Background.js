import React, {useEffect, useRef} from "react";
import backgroundVideo from "../assets/videobackground.mp4"
import backgroundPoster from "../assets/backgroundPoster.png"

export const Background = () => {
    const ref = useRef();

    const overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the color and opacity as needed
      zIndex: -1, // Ensure the overlay is below the video
    };

    const videoStyle = {
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: -2,
    };

    useEffect(() => {
        ref &&
          ref.current
            .play()
            .then(() => {})
            .catch((err) => {
              // Video couldn't play, low power play button showing.
            });   
      }, []);

    return(
      <>
        <div style={overlayStyle}></div>
        <video ref={ref} id="background-video" preload="auto" loop muted poster={backgroundPoster} style={videoStyle}>
            <source src={backgroundVideo} type="video/mp4"/>
            </video>
      </>
    );
}