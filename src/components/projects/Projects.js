import React from 'react'
import Title from "../layouts/Title";
import {projectOne, projectTwo, projectThree, projectFour  } from "../../assets/index";
import ProjectCard from "../projects/ProjectCard";

const Projects = () => {
    return (
        <section
        id="projects"
        className="w-full pt-10 pb-20  gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-700"
      >
        <div className="py-12 font-titleFont">
           
            <p className="text-4xl font-bold">Projects</p>
        </div>
      <div className='flex flex-col justify-center items-center '>
      </div>
      <div className='grid grid-cols-2 gap-14'>
      <ProjectCard
        title="Pharmacy Management System"
        des={<>
          <p>Aims to develop a software for the effective management of the database of a pharmaceutical store. It would improve the accuracy and enhance safety and efficiency in the pharmaceutical store.</p>
          <p>This system will help the pharmacist to maintain the records of the medicines, handle user and admin details, check and renew the validity of the medicines and orders placed by the customer.</p>
          <div className="mt-4">
            <p><strong>Language used:</strong> Python</p>
            <p><strong>Database:</strong> SQL</p>
          </div>
        </>}
        src={projectOne}
      />
      <ProjectCard
        title="Canteen Food Ordering Management System"
        des={<>
          <p>Canteen Food Ordering and Management System The prevailing issue of overcrowding in the canteen hinders efficient customer service and disrupts time management.The project aims to develop a solution that optimizes operations, improves customer service and time management in the canteen.</p>
          <div className="mt-4">
            <p><strong>Language used:</strong> HTML, CSS, JavaScript</p>
            <p><strong>Framework:</strong> Flask</p>
            <p><strong>Database:</strong> MongoDB</p>
          </div>
        </>}
        src={projectTwo}
      />
      <ProjectCard
        title="Inventory Based Business Management System"
        des={<>
          <p>Main project I worked on, a web application that is designed to assist businesses in efficiently managing their operations. The application aims to streamline various aspects of business management, including , sales and employee management, Order processing and customer relationship .</p>
          <div className="mt-4">
            <p><strong>Framework used:</strong> React</p>
            <p><strong>Backend used:</strong> Node.js</p>
            <p><strong>Database:</strong> MySQL</p>
          </div>
        </>}
        src={projectThree}
      />
      <ProjectCard
        title="Android Pregnancy Tracker"
        des={<>
          <p>Targeted for pregnant ladies, this project helps to keep track of their progress day by day and manage their pregnancy related things. Shows current progress and days until delivery Reads events from Phone calendar Calendar view with event markers Make todo notes, general notes, symptoms,events,appointments for each day Keep contacts of doctors to Manage doctor appointment and make phone call General Symptoms manual General Test/scan/checks manual</p>
          <div className="mt-4">
            <p><strong>Language used:</strong> Java</p>
          </div>
        </>}
        src={projectFour}
      />
    </div>
      </section>
    
    );
  };
  
  export default Projects;
  
