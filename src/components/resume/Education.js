import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}  >
        <div className="py-12 font-titleFont">
            {/* <p className="text-sm text-designColor tracking-[4px]">2020-2024</p> */}
            <p className="text-4xl font-bold">Education</p>
        </div>

        <div className="mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Bachelor of Technology"
            subTitle="Federal Institute of Science and Technology (FISAT), Angamaly  (2020 - 2024)"
            result="CGPA: 8.42"
            des="Computer Science and Engineering"
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="MGM Higher Secondary School, Kuruppampady (2018 - 2020)"
            result="Grade: 97%"
            des="Bio- Maths"
          />
          <ResumeCard
            title="High School Education"
            subTitle="Govt. Girls HSS, Perumbavoor (2018)"
            result="Grade: 98%"
            des=""
          />
        </div>
        </motion.div>
    )
}

export default Education