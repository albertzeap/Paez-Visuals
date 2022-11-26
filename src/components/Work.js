import { motion } from "framer-motion";
import React ,{useRef, useState, useEffect} from "react";
import Transition from "./Transition";
import { WorkCard } from "./WorkCard";


const workCard = [
    {
        name: "Wedding",

    },
    {
        name: "LifeTeen"
    },
    {
        name: "Travel"
    },
    {
        name: "Event"
    },
    {
        name: "Conference"
    },
];



export const Work = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[])


    return (
        <>
            <Transition>
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered has-text-white">Portfolio</h1>
                            <motion.div  ref={carousel} className="carousel is-flex" whileGrab={{cursor: "grabbing"}} style={{cursor: "grab", overflow: "hidden"}}>
                                <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel is-flex">
                                    {workCard.map((project, index) => {
                                        return(
                                            <motion.div key={project.name + index} className="item">
                                                <WorkCard  name={project.name}/>
                                            </motion.div>
                                        )
                                    })}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </Transition>
        </>
    );
}