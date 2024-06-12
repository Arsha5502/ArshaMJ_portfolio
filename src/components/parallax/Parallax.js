import React from 'react'
import "./parallax.css"
import {motion} from "framer-motion";

const Parallax = () => {
    return(
        <div className='parallax w-screen h-screen' style={{background:"linear-gradient(180deg, #111132,#0c0c1d)"}}>
            <motion.h1>Welcome to My Website</motion.h1>
            <motion.div className='mountain'></motion.div>
            <motion.div className='starbg'></motion.div>
            <motion.div className='stars'></motion.div>
            
        
        
        
        </div>
    )
}

export default Parallax