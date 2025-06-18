import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import winlogo from '../assets/img/windows95logo.svg';

function BottomBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isToggled, setToggle] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
    
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setToggle(prev => !prev);
    console.log(isToggled)
  };

  return (
    <div
      className="flex justify-between items-center fixed bottom-0 w-full h-[8vh] pl-5 pr-5 bg-[#C0C0C0] border-t-4 border-white"
      onClick={handleClick}
    >
      <div className="flex flex-row gap-3">
        <motion.div
          whileTap={{ y: 2, scale: 0.96 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="flex items-center justify gap-3 bg-[#C0C0C0] border-t-3 border-white border-l-3 h-10 w-35 shadow-[2px_2px_2px_2px_rgba(0,0,0,0.9)]"
        >
          <img src={winlogo} className="h-8 w-12 pl-3" />
          <h1 className="pixel tracking-widst text-black text-2xl font-bold spacing">Start</h1>
        </motion.div>   
      </div>

      <div className="flex items-center font-regular justify-center gap-3 bg-[#C0C0C0] border-b-3 border-white border-r-3 h-10 w-30 shadow-[-2px_-2px_4px_2px_rgba(0,0,0,0.9)]">
        <h1 className="pixel tracking-widest text-black text-lg spacing">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </h1>
      </div>
    </div>
  );
}

export default BottomBar;