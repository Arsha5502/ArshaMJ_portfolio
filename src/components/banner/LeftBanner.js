import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from 'react';
import bannerImg from '../../assets/images/bannerImg.png';  // Adjust the import path as needed
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Coder.", "UI Designer.", "Content Writer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Arsha M Joby</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#8b5cf6"
          />
        </h2>

        {isSmallScreen && (
          <div className="flex justify-center items-center " style={{marginTop:'-70px', marginBottom:'50px'}}>
            <img
              className="w-34 h-96 z-1 "
              src={bannerImg}
              alt="image"
            />
          </div>
        )}

        <p className="flex text-base font-bodyFont leading-6 tracking-wider">
          A passionate and aspiring UG student seeking the opportunity to learn about<br />
          and with innovative organizations that aid technical skill development and <br />career identity
          formation. I am driven by curiosity and constantly seek to expand<br />
          my knowledge and creativity.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/arshamjoby/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="https://github.com/Arsha5502"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='bannerIcon'>
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;