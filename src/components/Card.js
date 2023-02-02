import react from "react";
import profile from "../images/image.jpg";
import {FaGithub,FaLinkedinIn,FaRegEnvelope} from "react-icons/fa";
export const Card=()=>{
    return(
        <div className="w-full mt-5">
            <div className="flex flex-col justify-center max-w-sm mx-auto bg-gray-300 rounded-full shadow-xl p-9 hover:shadow-2xl">
                <div className="">
                    <img className="mx-auto rounded-full shadow-xl w-36 drop-shadow-sm" src={profile} alt="profile face"/>
                    
                </div>
                  <div className="mt-5 text-center">
                  <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="600">
                    <p className="text-xl font-semibold text-gray-900 sm:text-2xl">Deepesh</p>
                  </div>
                  <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="600">
                    <p className="inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-600 border-b-2 sm:text-base">Full Stack Web Developer</p>
                  </div> 
                   
               
                    <div className="flex justify-center mt-4 align-center">
                       <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-gray-800 rounded-full cursor-pointer sm:m-2 sm:p-2" href="https://github.com/deepesh06-95" target="_blank">
                         <FaGithub/>
                       </a>
                       <a className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 bg-green-300 rounded-full cursor-pointer sm:m-2 sm:p-2" href="https://www.linkedin.com/in/deepesh6" target="_blank">
                         <FaLinkedinIn/>
                       </a>
                       <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-green-400 rounded-full cursor-pointer sm:m-2 sm:p-2" href="mailto:ddhiru5@gmail.com" target="_blank">
                         <FaRegEnvelope/>
                       </a>
                     </div>
                  </div>
            </div>

        </div>
    )
}