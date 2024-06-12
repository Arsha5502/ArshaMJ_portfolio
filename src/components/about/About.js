import React from 'react'
import Title from "../layouts/Title";
import Card from "../about/Card";

const About = () => {
    return (
        <section
        id="about"
        className="w-full pt-10 pb-20  gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-700"
      >
       <Title title="About Me" des="Education"/>
       <div className='grid grid-cols-3 gap-10'>
        <Card
          title="B.Tech at Federal Institute of Science and Technology"
          des="2020-24"
        />
        <Card
          title="Higher Secondary Education at MGM HSS, Kuruppampady"
          des="2018-20"
        />
        <Card
          title="High School Education at GGHSS, Perumbavoor"
          des="2018"
        />
      </div>

      <div className='mt-10'>
      <Title  des="Interests"/>
       <div className='grid grid-cols-3 gap-10'>
        <Card
          title="Web Development"
          
        />
        <Card
          title="Web Designing"
       
        />
        <Card
          title="Volunteering"
         
        />

      </div>

      </div>
      </section>
    
    );
  };
  
  export default About;
  
