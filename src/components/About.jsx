import { useEffect } from "react";
import info from "../assets/img/info.svg"
import mypic from "../assets/img/mypic.jpg"

function About () {
  return (
    <div className="pt-5 flex flex-col items-center font-bold bg-white 
                    h-[calc(100%-8%)] md:h-[calc(100%-7%)] 
                    shadow-[inset_2px_2px_1px_rgba(0,0,0,0.7),inset_-2px_-2px_1px_rgba(255,255,255,0.8)] 
                    overflow-y-auto win95-scrollbar">
                      
      {/* <!-----------PARENT DIV-----------------> */}
      <div className="flex flex-row h-full w-full pl-3 pr-3 gap-2">
        <div className="w-screen h-50 shadow-[2px_3px_3px_1px_rgba(0,0,0,0.90)] ">

          {/* <!-----------GREY BAR-----------------> */}
          <div className="w-full h-[20%] bg-[#7D7D7D] flex items-center pl-3 gap-1 ">
            <img src={info} className="w-6 h-6"/>
            <p className="font-bold">General Info</p>
          </div>

          <div className="">
            
          </div>

        </div>
     
      </div>
    </div>
  );
}

export default About;
