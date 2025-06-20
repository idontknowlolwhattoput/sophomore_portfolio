import { useState,useEffect } from "react";
import BottomBar from "../components/BottomBar";
import Window from "../components/Window"



function App() {

  const [isToggled, setToggle] = useState(false)
  

  return (
    <>
      <div>
        <Window isToggled={isToggled} setToggle={setToggle}/>
      </div>
      <div className="bottom-0">
        <BottomBar setToggle={setToggle} />
      </div>
    </>
  );
}

export default App;
