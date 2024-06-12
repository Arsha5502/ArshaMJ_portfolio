import React, { useState } from "react";
import { motion } from "framer-motion";

const AchieveCard = ({ title, des, des2 }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleHover = () => {
    setShowInfo(true);
  };

  const handleLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      className={`relative w-full ${!showInfo ? 'h-22 w-30' : 'h-auto'} py-8 rounded-lg shadow-xl-purple flex items-center
        bg-gradient-to-r from bodyColor to-[#202327] group hover:-bg-gradient-to-b hover:from-black hover:to-[#B168E5] 
        transition-colors duration-100 transform hover:translate-y-1`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {!showInfo ? (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full h-12 rounded-lg mt-0 flex items-center justify-center">
         
          </div>
          <div className="text-center" style={{marginTop:"-55px"}}>
            <h3 className="text-base uppercase text-designColor font-normal mt-6">
              {title}
            </h3>
            <p className="text-sm tracking-wide mt-2 ml-11 mr-11 hover:text-gray-100 duration-300">
              {des}
            </p>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="w-full mt-4 flex flex-col gap-6"
        >
          <div className="flex items-center justify-center w-full " >
            <h3 className="text-base uppercase text-designColor font-normal" >
              {title}
            </h3>
          </div>
          <div className="items-center justify-center mx-auto">
            <p className="text-sm tracking-wide mt-2 ml-11 mr-11 hover:text-gray-100 duration-300">
              {des2}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AchieveCard;
