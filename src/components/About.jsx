import { useEffect } from "react";

function About () {
  return (
    <div className="pt-5 flex flex-col items-center font-bold  bg-white 
                    h-[calc(100%-8%)] md:h-[calc(100%-7%)] 
                    shadow-[inset_2px_2px_1px_rgba(0,0,0,0.7),inset_-2px_-2px_1px_rgba(255,255,255,0.8)] 
                    overflow-y-auto win95-scrollbar">
      {/* <!-----------PARENT DIV-----------------> */}
      <div className="flex flex-row h-full w-full pl-3 gap-2">

        <div className="w-[calc(50%-2%)] h-full ">
          <div className="bg-blue-700 h-9 w-full">
       
          </div>
          <div className="h-full w-full">

          </div>
        </div>

        <div className="w-[calc(50%-2%)] h-[200vh] flex flex-col border-2 border-blue-700">
          <div className="bg-blue-700 h-9 w-full flex items-center">
            <p className="text-white ml-2">Information</p>
          </div>
          <div className="h-full w-full font-medium tracking-tight pl-3">
            <p>Account Info</p>
            <p className="font-normal">Name: Joshua Miguel M. Vergara</p> 
            <p className="font-normal">{`Birthdate: 01/07/05 (21) y/o`}</p> 

            <p>Account Info</p>
            <p className="font-normal">Name: Joshua Miguel M. Vergara</p> 
            <p className="font-normal">{`Birthdate: 01/07/05 (21) y/o`}</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
