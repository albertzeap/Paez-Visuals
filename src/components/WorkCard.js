import React from "react";
import { motion } from "framer-motion";
import Transition from "./Transition";

export const WorkCard = ({project: {name, url}}) => {

    const iframeStyle = {
       
        height: "20em",
        width: "100%",
        resize: "both",
        overflow: "auto",
     
    }

    console.log(name);
    return (
        <>
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}> */}
                

                    
            <div className="container is-flex is-justify-content-center">
                <iframe style={iframeStyle} src={url} title="YouTube video player" frameBorder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
                                 
            {/* </motion.div>  */}
        </>
    );
}