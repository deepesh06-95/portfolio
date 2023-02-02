import react from "react";
import upgrad from "../images/upgrad.png";
import restroMap from "../images/restroMap.png";
import shopclues from "../images/shopclues.PNG";
import movieWatcher from "../images/movieWatcher.png";
import mailChimp from "../images/mailChimp.png";
import { FaGithub, FaGithubAlt } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
export const Project = () => {
  return (
    <div className="justify-center max-w-5xl py-12 mx-auto" id="project">
      <p className="pt-4 text-2xl font-semibold text-center text-gray-100 sm:text-4xl">Projects</p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl w-80 rounded-xl sm:w-96 hover:scale-105">
          <p className="mt-2 mb-2 text-xl font-semibold text-center sm:text-2xl">Shopclues clone</p>
          <img className="mx-auto shadow-xl w-96 rounded-xl drop-shadow-sm" src={shopclues} alt="profile face" />
          <div className="flex justify-center mt-4 align-center">
            <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-gray-800 rounded-full hover:text-gray-800 hover:bg-white sm:m-2 sm:p-2" href="https://github.com/deepesh06-95" target="_blank">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 bg-green-300 rounded-full hover:bg-blue-500 hover:text-green-300 sm:m-2 sm:p-2" href="https://narendrapanchal.github.io/shopcluesclone.github.io/" target="_blank">
              <GrDeploy />
              <span class="sr-only">Linkedin</span>
            </a>
          </div>
          <p className="w-auto px-2 pt-2 pb-2 text-xs text-gray-600 sm:text-base">In just five days, a four-person team completed a collaborative project.
            Some of my responsibilities included developing a product page, working jointly on a landing page, and implementing email functionality on a user registration page.</p>
          <p className="w-auto px-2 pb-4 text-xs text-gray-600 sm:text-base"><span className="font-bold">Tech Stack:</span> HTML | CSS | Javascript</p>
        </div>
        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl w-80 rounded-xl sm:w-96 hover:scale-105">
          <p className="mt-2 mb-2 text-xl font-semibold text-center sm:text-2xl">Upgrad clone</p>
          <img className="mx-auto shadow-xl w-96 rounded-xl drop-shadow-sm" src={upgrad} alt="profile face" />
          <div className="flex justify-center mt-4 align-center">
            <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-gray-800 rounded-full hover:text-gray-800 hover:bg-white sm:m-2 sm:p-2" href="https://github.com/deepesh06-95" target="_blank">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 bg-green-300 rounded-full hover:bg-blue-500 hover:text-green-300 sm:m-2 sm:p-2" href="https://gurdeep7.github.io/upgrad/html/index.html" target="_blank">
              <GrDeploy />
              <span class="sr-only">Linkedin</span>
            </a>
          </div>
          <p className="w-auto px-2 pt-2 pb-2 text-xs text-gray-600 sm:text-base">A collaborative project built by a team of 5 executed in 4 days. Some of my responsibilities included constructing two course pages, developing a modal for signin/signup, and adding sending messages on mobile for OTP for registration and login.</p>
          <p className="w-auto px-2 pb-4 text-xs text-gray-600 sm:text-base"><span className="font-bold">Tech Stack:</span> HTML | CSS | Javascript | MongoDB</p>
        </div>
        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl w-80 rounded-xl sm:w-96 hover:scale-105">
          <p className="mt-2 mb-2 text-xl font-semibold text-center sm:text-2xl">Restro Map App</p>
          <img className="mx-auto shadow-xl w-96 rounded-xl drop-shadow-sm" src={restroMap} alt="profile face" />
          <div className="flex justify-center mt-4 align-center">
            <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-gray-800 rounded-full hover:text-gray-800 hover:bg-white sm:m-2 sm:p-2" href="https://github.com/deepesh06-95/mapLeaflet" target="_blank">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 bg-green-300 rounded-full hover:bg-blue-500 hover:text-green-300 sm:m-2 sm:p-2" href="https://deepesh06-95.github.io/mapLeaflet/" target="_blank">
              <GrDeploy />
              <span class="sr-only">Linkedin</span>
            </a>
          </div>
          <p className="w-auto px-2 pt-2 pb-2 text-xs text-gray-600 sm:text-base">A restaurant listing app having pinned locations of them and onclicking showing the specific location with the details.</p>
          <p className="w-auto px-2 pb-4 text-xs text-gray-600 sm:text-base"><span className="font-bold">Tech Stack:</span> HTML | CSS | Javascript | LeafletJs</p>
        </div>
        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl w-80 rounded-xl sm:w-96 hover:scale-105">
          <p className="mt-2 mb-2 text-xl font-semibold text-center sm:text-2xl">Movie Watcher</p>
          <img className="mx-auto shadow-xl w-96 rounded-xl drop-shadow-sm" src={movieWatcher} alt="profile face" />
          <div className="flex justify-center mt-4 align-center">
            <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-gray-800 rounded-full hover:text-gray-800 hover:bg-white sm:m-2 sm:p-2" href="https://github.com/deepesh06-95/MovieWatcher" target="_blank">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 bg-green-300 rounded-full hover:bg-blue-500 hover:text-green-300 sm:m-2 sm:p-2" href="https://deepesh06-95.github.io/MovieWatcher/" target="_blank">
              <GrDeploy />
              <span class="sr-only">Linkedin</span>
            </a>
          </div>
          <p className="w-auto px-2 pt-2 pb-2 text-xs text-gray-600 sm:text-base">A movie listing app where user can see popular,top rated and upcoming movie details.</p>
          <p className="w-auto px-2 pb-4 text-xs text-gray-600 sm:text-base"><span className="font-bold">Tech Stack:</span> HTML | CSS | Javascript | ReactJs</p>
        </div>
        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl w-80 rounded-xl sm:w-96 hover:scale-105">
          <p className="mt-2 mb-2 text-xl font-semibold text-center sm:text-2xl">Mailchimp clone</p>
          <img className="mx-auto shadow-xl w-96 rounded-xl drop-shadow-sm" src={mailChimp} alt="profile face" />
          <div className="flex justify-center mt-4 align-center">
            <a className="p-1 m-1 text-xl text-white transition-colors duration-300 bg-gray-800 rounded-full hover:text-gray-800 hover:bg-white sm:m-2 sm:p-2" href="https://github.com/sandeepbeherakbl/mailchimp_clone" target="_blank">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 bg-green-300 rounded-full hover:bg-blue-500 hover:text-green-300 sm:m-2 sm:p-2" href="https://mail-chimp-clone-sigma.vercel.app" target="_blank">
              <GrDeploy />
              <span class="sr-only">Linkedin</span>
            </a>
          </div>
          <p className="w-auto px-2 pt-2 pb-2 text-xs text-gray-600 sm:text-base">A collaborative project built by a team of 4 executed in 4 days. Some of my responsibilities included constructing dashboard page and template creation page.</p>
          <p className="w-auto px-2 pb-4 text-xs text-gray-600 sm:text-base"><span className="font-bold">Tech Stack:</span> HTML | CSS | Javascript | ReactJs | MongoDB</p>
        </div>
      </div>
    </div>
  );
}