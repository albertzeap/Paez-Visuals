import React from "react";
import Transition from "./Transition";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export const About = () => {
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="About me: I am a freelance videographer and photographer based in California. Experience in weddings, event recaps, short films, etc."/>
                <link rel="canonical" href="/about"/>
            </Helmet>
            <Transition>
            <motion.div layout style={{ borderRadius: 20 }} />
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className=" container">
                            <h1 className="title has-text-white">I am a freelance videographer and photographer based in California.</h1>
                            <p className="subtitle is-6 has has-text-white">
                                I simply enjoy the 
                                {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}></motion.div> */}
                                <strong className="has-text-primary is-italic"> art of creating </strong> 
                                and 
                                <strong className="has-text-primary is-italic"> bringing visions to life</strong>. 
                                Whether it be simple travel videos for my own amusement, event recaps, or product pictures for clients, I find joy in it all. Within my 
                                <strong className="has-text-primary is-italic"> 4 years of experience</strong>, 
                                I have honed my skills so that I am capable of creating videos that possess 
                                <strong className="has-text-primary is-italic"> story and meaning</strong>. 
                                So far I have filmed and edited 
                                <strong className="has-text-primary is-italic"> event recaps</strong>, 
                                <strong className="has-text-primary is-italic"> conferences</strong>, 
                                <strong className="has-text-primary is-italic"> summer camps</strong>, 
                                <strong className="has-text-primary is-italic"> wedding videos</strong>,
                                <strong className="has-text-primary is-italic"> short stories</strong>, and 
                                <strong className="has-text-primary is-italic"> personal travel videos</strong>. 
                            </p>
                        </div>
                            

                    </div>
                </section>
            </Transition>
        </>
    );
}