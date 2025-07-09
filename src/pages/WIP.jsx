import { useNavigate } from 'react-router-dom';
import construction from '../assets/img/construction-svgrepo-com.svg'

function WIP () {
    const navigate = useNavigate();
    return (
      <div className="tracking-wider flex flex-col items-center justify-center h-screen w-screen overflow-hidden bg-gray-700 text-white">
         <div className="top-0 absolute w-full h-16 bg-[repeating-linear-gradient(45deg,_#000000,_#000000_20px,_#cc9900_20px,_#cc9900_40px)] flex items-center justify-center text-white text-lg font-bold tracking-wider "></div>
         <div className="flex flex-col items-center w-full max-w-lg gap-3">
            <img src={construction} className="w-32 h-32 max-w-lg max-h-lg"/>
            <h1 className="text-2xl font-semibold md:text-4xl bebas">Work in progress!</h1>
            <p className="text-center md:text-xl md:w-210 ">Website may appear glitched and incompatible on different browsers and device. Many bugs may occur during your experience. 
              We apologize for this inconvenience and we're trying to wrap this up as soon as possible! 
            </p>
            <button className="text-lg font-bold bg-blue-500 w-30 h-12 text-white rounded-lg hover:bg-blue-700 transition" onClick={(e) => {navigate("/home ")}}>Continue</button>
         </div>
           <div className="bottom-0 absolute w-full h-16 bg-[repeating-linear-gradient(45deg,_#000000,_#000000_20px,_#cc9900_20px,_#cc9900_40px)] flex items-center justify-center text-white text-lg font-bold tracking-wider "></div>
      </div>
    )
}

export default WIP;