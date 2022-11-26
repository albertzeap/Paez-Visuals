import React from "react";
import { motion } from "framer-motion";
import Transition from "./Transition";

const line1 = "PAEZ VISUALS";
const line2 = "Freelance Videographer and Editor";
const sentence = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1, 
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
}
const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0,
    }
}

export const Home = () => {
    return (
        <>
            <Transition>
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            {/* <motion.div 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1.1 }}
                            > */}
                            <motion.h3
                                className="load-screen--message"
                                variants={sentence}
                                initial="hidden"
                                animate="visible"
                                >
                                {line1.split("").map((char, index) =>{
                                    return (
                                        <motion.span className="title is-1 has-text-white is-italic" key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}
                                <br/>
                                {line2.split("").map((char,index) => {
                                    return (
                                        <motion.span className="subtitle" key={char + "-" + index} variants={letter}>
                                            {char}
                                        </motion.span>
                                    )
                                })}
                                {/* <h1 className="title is-1 is-uppercase has-text-white is-italic">Paez Visuals</h1>
                                <p className="subtitle">Freelance Videographer and Editor</p> */}
                            </motion.h3>
                            {/* </motion.div> */}
                        </div>
                    </div>
                    {/* <BottomNav/> */}
                </section>
            </Transition>
        </>
   
    );
}