import React from "react";

const Card = ({ title, des }) => {
    return (
        <div className='relative w-full h-50 w-45 py-8 rounded-lg shadow-xl-purple flex items-center
        bg-gradient-to-r from bodyColor to-[#202327] group hover:-bg-gradient-to-b hover:from-black hover:to-[#B168E5] 
        transition-colors duration-100 transform hover:translate-y-1'>
            <div>
                <div className="flex flex-col gap-6 pl-5">
                    <h2 className="text-1xl font-titleFont font-bold text-gray-300">
                        {title}
                    </h2>  
                    <p className="base pt-3">{des}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
