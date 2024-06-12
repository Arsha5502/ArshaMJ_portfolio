import React from "react";
import { motion } from "framer-motion";
import AchieveCard from "../resume/AchieveCard";

const Achievements = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            
       
            <div className="w-full pt-10 pb-20  gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-700">
       
       <div className='grid grid-cols-4 gap-10'>
        <AchieveCard
          title="IEEEXtreme 17.0"
          des="Global Rank: 2349"
          des2="IEEE Xtreme is a global programming challenge where teams of IEEE Student members, guided by an IEEE member and often assisted by an IEEE Student Branch, compete against each other for 24 hours to solve a series of programming problems."
        />
        <AchieveCard
          title="Best Outgoing Student Award (2024)"
          des="by IEEE FISAT SB"
          des2="The FISAT Student Branch Chapter, established in 2003 under the motto 'Integrating Innovations,' focuses on imparting technical skills to students and elevating the quality of societal engagement, earning recognition as one of the top 5 active student branches in the Kerala section."
        />
        <AchieveCard
          title="Student Police Cadet"
          des="Recognized as the Best Indoor"
          des2="The Student Police Cadet (SPC) Project is a high school-based initiative by Kerala Police, implemented jointly by the Departments of Home and Education, and supported by Departments of Excise, Transport, Forest, and Local Self-Government. The project trains high school students to respect the laws, practice discipline, and to develop civic consciousness and empathy for vulnerable sections of society. It also strengthens commitment towards the family, community, and the environment, enabling them to resist negative tendencies such as substance abuse, deviant behaviour, intolerance, and other social evils."
        />
        <AchieveCard
          title="Innovate| Create| Implement: Entrepreneurship Competition "
          des="Runner Up"
          des2="An entrepreneurship workshop conducted as part of Droid 2.0- A National Conclave on Robotics conducted by IEEE RAS Kerala Chapter and IEEE RAS SBC FISAT."
        />
        <AchieveCard
          title="Electronic Keyboards- Grade 1 (Trinity College, London)"
          des="Distinction"
        />
       <AchieveCard
       title="Electronic Keyboards- Grade 3 (Trinity College, London)"
       des="Merit"
       >

       </AchieveCard>
      </div>
      </div>


      
    
      
    </motion.div>
  );
};

export default Achievements;
