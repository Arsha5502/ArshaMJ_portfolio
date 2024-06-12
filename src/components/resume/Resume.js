import React, { useState } from "react";
import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";


const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementsData, setAchievementsData] = useState(false);
    return (
        <section
            id="resume"
            className="w-full pt-10 pb-20 border-b-[1px] font-titleFont border-b-gray-700"
        >
            <div className="flex justify-center items-center text-center">
                <Title des="My Resume"/>
            </div>
            <div>
                <ul className="w-full grid grid-cols-4">
                    <li onClick={() => {
                        setEducationData(true);
                        setSkillData(false);
                        setExperienceData(false);
                        setAchievementsData(false);
                    }} className={`resumeLi ${educationData ? "border-2 border-designColor rounded-lg" : "border-transparent"}`}>
                        Education
                    </li>
                    <li onClick={() => {
                        setEducationData(false);
                        setSkillData(true);
                        setExperienceData(false);
                        setAchievementsData(false);
                    }} className={`resumeLi ${skillData ? "border-2 border-designColor rounded-lg" : "border-transparent"}`}>
                        Skills
                    </li>
                    <li onClick={() => {
                        setEducationData(false);
                        setSkillData(false);
                        setExperienceData(true);
                        setAchievementsData(false);
                    }} className={`resumeLi ${experienceData ? "border-2 border-designColor rounded-lg" : "border-transparent"}`}>
                        Experience
                    </li>
                    <li onClick={() => {
                        setEducationData(false);
                        setSkillData(false);
                        setExperienceData(false);
                        setAchievementsData(true);
                    }} className={`resumeLi ${achievementsData ? "border-2 border-designColor rounded-lg" : "border-transparent"}`}>
                        Achievements
                    </li>
                </ul>
            </div>
            {educationData &&  <Education/>}
            {skillData &&     <Skills/>}
            {experienceData &&       <Experience/>}
            {achievementsData &&     <Achievements/>}
        </section>
    )
}

export default Resume;
