import { FaArrowRight } from "react-icons/fa";
export const ContactMe=()=>{
    return (
        <div className="w-full max-w-lg pt-8 m-auto text-center" id="contact">
         <h1 className="text-2xl text-gray-100 sm:text-4xl">Contact Me Here</h1>
         <a href="mailto:ddhiru5@gmail.com">
             <span className="inline-block w-auto py-4 mt-6 text-base text-white bg-black rounded-full cursor-pointer font-display md:text-xl px-7 hover:animate-pulse">
                 <div className="flex flex-row items-center">
                     <span className="mr-3">Get in touch</span>
                     <FaArrowRight color="white"/>
                 </div>

             </span>
         </a>
         
        </div>
    );
}