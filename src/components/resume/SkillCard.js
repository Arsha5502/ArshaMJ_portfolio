import React from "react";

const SkillCard = ({ title, des }) => {
    return (
        <div className='relative  h-20 w-64 py-8 rounded-lg shadow-xl-purple flex items-center
        bg-gradient-to-r from bodyColor to-[#202327] group hover:-bg-gradient-to-b hover:from-black hover:to-[#B168E5] 
        transition-colors duration-100 transform hover:translate-y-1 mt-4'> 
            <div>
                <div className="flex flex-col gap-1 pl-5">
                    <h2 className="text-1xl font-titleFont font-bold text-gray-300">
                        {title}
                    </h2>  
                    <p className="base pt-1">{des}</p>
                </div>
               
            </div>
           
        </div>
    )
}

export default SkillCard;
