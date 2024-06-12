import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ title, des, src }) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleHover = () => {
        setShowInfo(true);
    };

    const handleLeave = () => {
        setShowInfo(false);
    };

    return (
        <div 
            className={`relative w-112 h-96 py-7 rounded-lg shadow-xl-purple flex items-center
                bg-gradient-to-r from bodyColor to-[#202327] group hover:-bg-gradient-to-b hover:from-black hover:to-[#550C8A] 
                transition-colors duration-100 transform hover:translate-y-1
            `}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            {!showInfo ? (
                <div className="flex flex-col items-center justify-center w-full"> {/* Added w-full for centering */}
                    <div className="w-full h-64 rounded-lg mt-0 flex items-center justify-center"> {/* Centering the image horizontally */}
                        <img className="object-cover max-w-full max-h-full group-hover:scale-110 duration-300 cursor-pointer" src={src} alt={title}/>
                    </div>
                    <div>
                        <h3 className="text-base uppercase text-designColor font-normal mt-6">{title}</h3>
                    </div> 
                </div>
            ) : (
                <div className="w-full mt-4 flex flex-col gap-6">
                    <div className="flex items-center justify-center w-full">
                        <h3 className="text-base uppercase text-designColor font-normal">{title}</h3>
                    </div>
                    <div className="items-center justify-center mx-auto">
                        <p className="text-sm tracking-wide mt-2 ml-11 mr-11 hover:text-gray-100 duration-300">{des}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
