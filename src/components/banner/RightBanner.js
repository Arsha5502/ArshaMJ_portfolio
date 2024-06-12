import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
    return (
      <div className="relative lg:absolute bottom-10 lg:bottom-52 right-72 lg:right-72 w-48 h-32 lg:w-72 lg:h-80 bg-gradient-to-r from-[#1e2024] to-[#0B1120] shadow-lg-purple flex justify-center items-center">
        <img 
          className='w-[42] h-[42] z-1'
          src={bannerImg} 
          alt='image'
        />
      </div>
    );
  }


export default RightBanner;
