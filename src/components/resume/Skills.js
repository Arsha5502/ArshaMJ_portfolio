import React from "react";
import Title from "../layouts/Title";
import SkillCard from "./SkillCard";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-4xl font-bold">Technical Skills</p>
        </div>

        <div className="mt-6 lgl:mt-14 w-full gap-10">
          <AnimatePresence>
            <motion.div
              key="technicalSkills"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
            >
              <SkillCard title="HTML & CSS" des={"Intermediate"} />
              <SkillCard title="Python" des={"Intermediate"} />
              <SkillCard title="JavaScript" des={"Beginner"} />
              <SkillCard title="JAVA" des={"Intermediate"} />
              <SkillCard title="MySQL" des={"Intermediate"} />
              <SkillCard title="React" des={"Beginner"} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="ml-56">
        <div className="py-12 font-titleFont">
          <p className="text-4xl font-bold">Generic Skills</p>
        </div>

        <div className="mt-6 lgl:mt-14 w-full gap-10">
          <AnimatePresence>
            <motion.div
              key="genericSkills"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
            >
              <SkillCard title="Communication" />
              <SkillCard title="Leadership Skills" />
              <SkillCard title="Content Writing" />
              <SkillCard title="Event Management" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
