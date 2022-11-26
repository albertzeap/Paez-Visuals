import React from "react";
import { motion } from "framer-motion";
import Transition from "./Transition";

export const WorkCard = ({project: {name, url}}) => {

    console.log(name);
    return (
        <>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                <div className="card">
                    <div className="card-image is-centered">
                        <img className="image" src={url} alt=""/>
                    </div>
                    {/* <div className="card-content">
                        <div className="content has-text-dark has-text-centered">
                            {name}
                        </div>
                    </div> */}
                </div>
                {/* <div className=" subtitle has-text-primary has-text-centered">
                    {name}
                </div> */}
            </motion.div> 
        </>
    );
}