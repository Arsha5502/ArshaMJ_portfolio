import React from 'react'
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';


const Navbar = () =>{
    return(
        <div className="max-w-full h-24 sticky top-0 z-50 backdrop-blur-2xl transition-colors bg-bodyColor/70 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 ">
            <div>
              
            <a href='/home' class="text-purple text-shadow-purple text-lg"><b>A_mJ</b></a>


            </div>
            <div >
               <ul className="flex items-center gap-6 lg:gap-6">
                {
                    navLinksdata.map(({_id, title, link}) => (
                        <li
                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                        key={_id}
                      >
                        <Link
                          activeClass="active"
                          to={link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {title}
                        </Link>
                      </li>
                            
                        
                    ))
                }
                </ul> 
            </div>
        </div>
    )


}

export default Navbar