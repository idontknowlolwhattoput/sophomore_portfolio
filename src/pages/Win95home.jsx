import { useState, useEffect, useRef } from "react";

import winlogo from '../assets/img/windows95logo.svg';
import { Analytics } from '@vercel/analytics/react';
import { motion } from "motion/react";

import about from "../assets/img/about.svg";
import skills from "../assets/img/cv.svg";
import contacts from "../assets/img/contacts.svg";
import email from "../assets/img/email.svg";

import Minimize from '../assets/img/minimize.svg';
import Scale from '../assets/img/scaledown.svg';
import Close from '../assets/img/close.svg';

import construction from '../assets/img/construction-svgrepo-com.svg';

import About from "../components/About";
import Skills from "../components/Skills";

const imageMap = { about, skills, contacts, email };

function App() {
  const [firstVisit, setVisit] = useState(true);
  const [position, setPosition] = useState({ x: -13, y: -23});
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    iconname: "",
    src: "",
    default: "",
  });

  const [isToggled, setToggle] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRendered, setRender] = useState(false);

  const icons = [
    { iconname: "About me", src: "about", default: "about me" },
    { iconname: "CV/Skills", src: "skills", default: "about me" },
    { iconname: "Contacts", src: "contacts", default: "contacts" },
    { iconname: "Email me!", src: "email", default: "about me" },
  ];

  const handleClick = () => setToggle(prev => !prev);

  const renderContent = () => {
    switch (selected.src) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      default:
        return null;
    }
  };

  const handleSelect = (iconname, src) => {
    setOpen(true);
    setRender(true);
    setSelected(prev => ({ ...prev, iconname, src }));
  };

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

 
  const handleMouseDown = (e) => {
    setIsDragging(true);
    cancelAnimationFrame(animationRef.current);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;
    setVelocity({
      x: newX - position.x,
      y: newY - position.y,
    });
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    let vx = velocity.x;
    let vy = velocity.y;
    const friction = 0.9; 

    const animate = () => {
      vx *= friction;
      vy *= friction;
      if (Math.abs(vx) < 0.5 && Math.abs(vy) < 0.5) {
        cancelAnimationFrame(animationRef.current);
        return;
      }
      setPosition(prev => ({ x: prev.x + vx, y: prev.y + vy }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  };


  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    cancelAnimationFrame(animationRef.current);
    offset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newX = touch.clientX - offset.current.x;
    const newY = touch.clientY - offset.current.y;
    setVelocity({
      x: newX - position.x,
      y: newY - position.y,
    });
    setPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => handleMouseUp();

  return (
    <>
    {/* NAVBAR POPUP */}
      {isToggled && (
        <div className="flex flex-row absolute h-100 w-75 bg-[#C0C0C0] bottom-13 z-40 shadow-[3px_3px_3px_0.5px_rgba(0,0,0.9)] border-3 border-white border-b-0 border-r-0">
          <span className="flex items-center justify-center bg-gray-600 w-12">
            <div className="flex flex-col gap-26 mt-20">
              <p className="-rotate-90 text-gray-300 text-3xl font-semilight whitespace-nowrap">95</p>
              <p className="-rotate-90 text-gray-300 text-3xl font-extrabold whitespace-nowrap">Windows</p>
            </div>
          </span>
          <div className="pixel text-lg font-medium flex flex-col h-full w-full cursor-pointer">
            {icons.map((ico, key) => (
              <div
                className="flex items-center w-full h-13 pl-4 hover:bg-[#0000ff] hover:text-white"
                key={key}
                onClick={() => handleSelect(ico.iconname, ico.src)}
              >
                <img src={imageMap[ico.src]} className="w-8 h-8 mr-2" />
                <p>{ico.iconname}</p>
                
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="select-none bg-[#008080] h-screen">
        <div className="flex flex-col pl-3 pt-6 gap-3 w-screen h-full">
          {icons.map((ico, key) => (
            <div
              className="flex flex-col gap-1 items-center w-25 h-25 active:bg-gray-300"
              key={key}
              onClick={() => handleSelect(ico.iconname, ico.src)}
            >
              <img src={imageMap[ico.src]} className="w-15 h-15" />
              <p className="pixel text-center text-white text-lg">{ico.iconname}</p>
            </div>
          ))}

          {isOpen && (
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="bg-gray-400 w-screen h-screen absolute border-white border-t-3 border-l-3 shadow-[3px_3px_3px_1px_rgba(0,0,0.9)] border-r-1 border-b-1
                         md:w-200 md:h-130 transition-transform duration-75 ease-out"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
            >
              <div
                className="flex items-center justify-between w-full h-8 pl-2 pr-2 bg-[#0118D1] cursor-move"
              >
                <div className="flex items-center gap-1">
                  <img src={imageMap[selected.src]} className="w-5 h-5" />
                  <p className="pixel font-semibold tracking-widest text-white">{selected.iconname}</p>
                </div>
                <div className="flex flex-row items-center gap-1.5">
                  <img src={Minimize} className="w-5 h-5 shadow-[1px_1px_1px_2px_rgba(0,0,0,0.7)]" />
                  <img src={Scale} className="w-5 h-5 shadow-[1px_1px_1px_2px_rgba(0,0,0,0.7)]" />
                  <img
                    src={Close}
                    className="w-5 h-5 shadow-[1px_1px_1px_2px_rgba(0,0,0,0.7)]"
                    onClick={() => setOpen(false)}
                  />
                </div>
              </div>

              {isRendered && (
                <div className="p-1 pl-3 pr-3 w-full h-[calc(100%-10%)] md:h-[calc(100%-7%)]">
                  <div className="mb-1 flex flex-row gap-3 font-medium">
                    <p className="hover:bg-black hover:text-white">File</p>
                    <p className="hover:bg-black hover:text-white">Edit</p>
                    <p className="hover:bg-black hover:text-white">Settings</p>
                  </div>
                  {renderContent()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bottom-0">
        <div className="flex justify-between items-center fixed bottom-0 w-full h-[8vh] pl-5 pr-5 bg-[#C0C0C0] border-t-4 border-white">
          <div className="flex flex-row gap-3 cursor-pointer" onClick={handleClick}>
            <motion.div
              whileTap={{ y: 2, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex items-center justify gap-3 bg-[#C0C0C0] border-t-3 border-white border-l-3 h-10 w-35 shadow-[2px_2px_2px_1px_rgba(0,0,0,0.5)]"
            >
              <img src={winlogo} className="h-8 w-12 pl-3" />
              <h1 className="pixel tracking-widst text-black text-2xl font-bold spacing">Start</h1>
            </motion.div>
          </div>

          <div className="flex items-center font-regular justify-center gap-3 bg-[#C0C0C0] border-b-3 border-white border-r-3 h-10 w-30 shadow-[-2px_-2px_4px_1px_rgba(0,0,0,0.5)] cursor-pointer">
            <h1 className="pixel tracking-widest text-black text-lg spacing">
              {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
