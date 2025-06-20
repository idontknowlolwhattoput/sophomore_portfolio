import { useState,useEffect } from "react";
import BottomBar from "../components/BottomBar";

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
  const [isToggled, setToggle] = useState(false)
  const icons = [
    { iconname: "About me", src: "about", default: "about me" },
    { iconname: "CV/Skills", src: "skills", default: "about me" },
    { iconname: "Contacts", src: "contacts", default: "contacts" },
    { iconname: "Email me!", src: "email", default: "about me" },
  ];
  
  

  return (
    <>
      <div>
      <div className="flex flex-col pl-5 pt-8 gap-3 w-screen h-screen">
      {icons.map((ico, key) => (
        <div className="flex flex-col gap-1 items-center w-25 h-25 active:bg-gray-300 " key={key}>
          <img src={imageMap[ico.src]} className="w-15 h-15" />
          <p className="pixel text-center text-white text-lg">{ico.iconname}</p>
        </div>
      ))}
    </div>
      </div>
      <div className="bottom-0">
        <BottomBar setToggle={setToggle} />
      </div>
    </>
  );
}

export default App;
