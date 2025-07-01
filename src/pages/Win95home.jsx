import { useState, useEffect, useRef} from "react";
import BottomBar from "../components/BottomBar";
import winlogo from '../assets/img/windows95logo.svg';

import { Analytics } from '@vercel/analytics/react';
import { motion } from "motion/react";

import about from "../assets/img/about.svg";
import skills from "../assets/img/cv.svg";
import contacts from "../assets/img/contacts.svg";
import email from "../assets/img/email.svg";


const imageMap = {
  about,
  skills,
  contacts,
  email,
};

function App() {
 
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setOpen] = useState(true);
  const [isToggled, setToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const icons = [
    {
      iconname: "About me",
      src: "about",
      default: "about me"
    },
    {
      iconname: "CV/Skills",
      src: "skills",
      default: "about me"
    },
    {
      iconname: "Contacts",
      src: "contacts",
      default: "contacts"
    },
    {
      iconname: "Email me!",
      src: "email",
      default: "about me"
    },
  ];

  const handleClick = () => {
    setToggle(prev => !prev)
  }

  useEffect(() => {
     const updatePosition = (e) => {
      dragging.current = false;
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 100);
    return () =>
       clearInterval(interval);
  },[]);

   const handleMouseMove = (e) => {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

    const handleMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

return (
<>
  {/* START MENU MODAL */}
  {isToggled && (
  <div className="flex flex-row absolute h-100 w-75 bg-[#C0C0C0] bottom-13 z-40 shadow-[2px_2px_3px_0.5px_rgba(0,0,0,0.9)] border-3 border-white">
      <span className= "flex items-center justify-center bg-gray-600 w-12">
        <div className="flex flex-col gap-26  mt-20">
           <p className=" -rotate-90 text-gray-300 text-3xl font-semilight   whitespace-nowrap ">95</p>
          <p className=" -rotate-90 text-gray-300 text-3xl font-extrabold whitespace-nowrap ">Windows</p>
        </div>
      </span>
      <div className="pixel text-lg font-medium flex flex-col h-full w-full cursor-pointer">
        {icons.map((ico, key) => (
           <div className="flex items-center w-full h-13 pl-4 hover:bg-[#0000ff] hover:text-white" key={key}> 
               <img src={imageMap[ico.src]} className="w-8 h-8 mr-2" />
               <p>{ico.iconname}</p>
           </div>
        ))}
      </div>
  </div>
  )}

 

  {/* WINDOW AREA */}
  <div>
    <div className="flex flex-col pl-3 pt-6 gap-3 w-screen h-screen">
      {icons.map((ico, key) => (
      <div className="flex flex-col gap-1 items-center w-25 h-25 active:bg-gray-300 " key={key}>
        <img src={imageMap[ico.src]} className="w-15 h-15" />
        <p className="pixel text-center text-white text-lg">{ico.iconname}</p>
      </div>
      ))}
      <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="w-40 h-24 bg-green-600 text-white flex items-center justify-center select-none cursor-grab rounded shadow-lg"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      Drag me!
    </div>
    </div>
  </div>

  {/* NAVBAR */}
  <div className="bottom-0">
    <div
      className="flex justify-between items-center fixed bottom-0 w-full h-[8vh] pl-5 pr-5 bg-[#C0C0C0] border-t-4 border-white">
      <div className="flex flex-row gap-3 cursor-pointer"
      onClick={handleClick}>
        <motion.div whileTap={{ y: 2, scale: 0.96 }} transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="flex items-center justify gap-3 bg-[#C0C0C0] border-t-3 border-white border-l-3 h-10 w-35 shadow-[2px_2px_2px_2px_rgba(0,0,0,0.9)]">
          <img src={winlogo} className="h-8 w-12 pl-3" />
          <h1 className="pixel tracking-widst text-black text-2xl font-bold spacing">Start</h1>
        </motion.div>
      </div>

      <div
        className="flex items-center font-regular justify-center gap-3 bg-[#C0C0C0] border-b-3 border-white border-r-3 h-10 w-30 shadow-[-2px_-2px_4px_2px_rgba(0,0,0,0.9)] cursor-pointer">
        <h1 className="pixel tracking-widest text-black text-lg spacing">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h1>
      </div>
    </div>
  </div>
   
</>
);
}

export default App;