import React, {useEffect, useRef} from "react";
import backgroundVideo from "../assets/videobackground.mp4"
import backgroundPoster from "../assets/backgroundPoster.png"

export const Background = () => {
    const ref = useRef();

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
        <video ref={ref} id="background-video" preload="auto" loop muted poster={backgroundPoster} style={{
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