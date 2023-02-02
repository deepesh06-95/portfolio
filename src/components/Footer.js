import react from "react";
import ScrollIntoView from "react-scroll-into-view";
import {FaGithub,FaLinkedinIn,FaRegEnvelope,FaSortUp} from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi";
export const Footer=()=>{
    return (
      <>
        <div className="py-2 border-t-3/2">
         
            <div className="flex justify-center align-center">
            <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-gray-800 rounded-full cursor-pointer sm:m-2 sm:p-2" href="https://github.com/deepesh06-95" target="_blank">
                         <FaGithub/>
                       </a>
                       <a className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 bg-green-300 rounded-full cursor-pointer sm:m-2 sm:p-2" href="https://www.linkedin.com/in/deepesh6" target="_blank">
                         <FaLinkedinIn/>
                       </a>
                       <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-green-400 rounded-full cursor-pointer sm:m-2 sm:p-2" href="mailto:ddhiru5@gmail.com">
                         <FaRegEnvelope/>
                       </a>
                    
            </div>
        </div>
        <div className="w-full max-w-lg pt-1 m-auto text-center">
         <h1 className="text-base text-gray-100 sm:text-xl">✉️ ddhiru5@gmail.com</h1>
         <h1 className="text-base text-gray-100 sm:text-xl">📞 9936742091</h1>
         </div>
        <ScrollIntoView selector="#tech">
            <div className="px-20 pt-4 mx-auto">
                <FaSortUp className="mx-auto text-3xl text-blue-500 animate-bounce hover:text-white"/>
            </div>
        </ScrollIntoView>
        </>

    );
}