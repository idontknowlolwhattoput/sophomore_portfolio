import { useEffect } from "react";
import info from "../assets/img/info.svg"
import mypic from "../assets/img/mypic.jpg"
import place from "../assets/img/place.svg"
import email2 from "../assets/img/email2.svg"
import linkedin from "../assets/img/linkedin.svg"

function About () {
  return (
    <div className="pt-5 flex flex-col items-center font-bold bg-white 
                    h-[calc(100%-8%)] md:h-[calc(100%-7%)] 
                    shadow-[inset_2px_2px_1px_rgba(0,0,0,0.7),inset_-2px_-2px_1px_rgba(255,255,255,0.8)] 
                    overflow-y-auto win95-scrollbar">
                      
      {/* <!-----------PARENT DIV-----------------> */}
      <div className="flex flex-row h-full w-full pl-3 pr-3 gap-2">
        <div className="w-screen h-80 shadow-[2px_3px_3px_1px_rgba(0,0,0,0.90)] ">
            <div className="w-full h-[15%] bg-[#7D7D7D] flex items-center pl-3 gap-1 ">
              <img src={info} className="w-8 h-8"/>
              <p className="font-bold text-xl">General Info</p>
            </div>
            <div className="h-[80%] w-full flex items-center pl-10 pr-10 gap-5">
              <img src={mypic} className="w-50 h-[80%] rounded-sm"/>
              <div className="flex flex-col w-full h-[80%]">
               <h1 className="text-2xl font-bold">Joshua Miguel Vergara</h1>
               <h1 className="text-xl font-semibold">Full-Stack Developer</h1>
               <div className="flex items-center mt-2 gap-1">
                 <img src={place} className="w-6 h-6 rounded-sm "/>
                 <h1 className="font-semibold">Pasig City</h1>
               </div>
               <div className="flex items-center mt-2 gap-1">
                <img src={email2} className="w-6 h-6 rounded-sm "/>
                <h1 className="font-semibold">vergarajoshuamiguel@gmail.com</h1>
               </div>
               <div className="flex items-center mt-2 gap-1">
                <img src={email2} className="w-6 h-6 rounded-sm "/>
                <a className="font-semibold" href="www.youtube.com"> Linkedin</a>
               </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
