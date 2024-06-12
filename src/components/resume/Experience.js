import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}>
   
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-2">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="flex ">
          <div className="mr-10">
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
          <ExperienceCard
            title="Marketing Team Lead"
            subTitle="ZELTO Home Service - (June 2023 - December 2023)"
           
            des="Zelto is a growing handyman service provider with the aim of helping people find their ideal
            handyman for various jobs.
            Implemented strategies as team lead to cultivate community engagement and expand awareness of
            our evolving handyman service."
          />
          <ExperienceCard
            title="Secretary"
            subTitle="IEEE FISAT Student Branch - (May 2023 - April 2024)"
           
            des="IEEE is the world's largest technical professional organization. As the Secretary of IEEE FISAT SB,I coordinated various events, including inter-college and national gatherings, as well as meetings. Additionally, I generated and maintained accurate reports while effectively managing the Student Branch."
          />
          <ExperienceCard
            title="Student Member"
            subTitle="Astro Club, FISAT - (June 2022 - Present)"
            des={""}
            
          />

        </div>
      </div>
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5">
        <ExperienceCard
            title="Women In Signal Processing Coordinator"
            subTitle="IEEE FISAT Student Branch - (June 2022 - May 2023)"
            des="As the Women in Signal Processing Coordinator (WiSP) of IEEE FISAT SB, I have organized numerous events and successfully composed and secured proposals.WISP supports women in signal processing, offering platforms for knowledge exchange and professional growth."
           
          />
          <ExperienceCard
            title="Student Police Cadet Volunteer Corps"
            subTitle="Ernakulam Rural -(2018 - Present)"
           
           
          />
          

        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Experience;
