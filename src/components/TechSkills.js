import react from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiRedux } from "react-icons/si";
import msSQL from "../images/msSQL.png";
import Aos from "aos";
import "aos/dist/aos.css";
export const TechSkill = () => {

  return (<div className="justify-center max-w-4xl py-12 mx-auto" >
    <p className="pt-4 text-2xl font-semibold text-center text-gray-100 sm:text-4xl">Tech skills</p>
    <div className="flex flex-wrap justify-center pt-2">
      <div data-aos="flip-left" data-aos-duration="500" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <FaHtml5 color="red" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">HTML</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="700" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <FaCss3Alt color="blue" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">CSS</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="900" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <SiJavascript color="#F0DB4F" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">JavaScript</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="1100" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <FaReact color="#61dbfb" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">React</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="1300" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <SiTailwindcss color="#2196f3" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Tailwind CSS</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="1500" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <SiMongodb color="#4DB33D" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">MongoDB</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="1700" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <SiExpress color="#303030" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Express JS</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="1900" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <FaNodeJs color="#303030" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Node JS</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="2100" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <SiRedux color="purple" className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Redux</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="2100" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <img src={msSQL} className="mx-auto text-4xl" />
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">MS SQL</p>
      </div>
      <div data-aos="flip-left" data-aos-duration="2100" className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-gray-200 shadow-2xl rounded-xl sm:w-52 hover:scale-105">
        <div className="mx-auto text-4xl" >EJS</div>
        <p className="mt-6 text-xl font-semibold text-center sm:text-2xl">Embedded JavaScript</p>
      </div>
    </div>
  </div>);
}