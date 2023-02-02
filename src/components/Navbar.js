import react, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import ScrollIntoView from "react-scroll-into-view";
export const Navbar=()=>{
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="sticky top-0 z-20 items-center justify-between p-4 text-xl bg-gray-300 md:flex">
      <div className="flex items-center justify-between">
        <h3 className="font-bold">Deepesh</h3>

        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed bottom-0 top-12 md:flex md:space-x-7 items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-8/12 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-left"
        }
      >
        <ScrollIntoView selector="#about" onClick={() => setShowNav(!showNav)}>
        <div className="cursor-pointer">About</div>
        </ScrollIntoView>
        <ScrollIntoView selector="#project" onClick={() => setShowNav(!showNav)}>
        <div className="cursor-pointer">Projects</div>
        </ScrollIntoView>
        <ScrollIntoView selector="#contact" onClick={() => setShowNav(!showNav)}>
        <div className="cursor-pointer">Contact</div>
        </ScrollIntoView>
        <div onClick={() => setShowNav(!showNav)}> 
        <a href="https://drive.google.com/file/d/1UYYr2VBNi8mw5K4BaTi87ydDh0nt-j2k/view?usp=sharing" target="_blank">Resume</a>
        </div>
      </ul>
    </nav>
  );
}