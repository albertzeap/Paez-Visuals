import React from "react";
import { motion } from "framer-motion";

export const WorkCard = ({name}) => {
    return (
         <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <div className="card has-background-dark ml-3 mr-5">
                <div className="card-content">
                    <div className="content">
                        {name}
                    </div>
                </div>
            </div>
         </motion.div> 
    );
}