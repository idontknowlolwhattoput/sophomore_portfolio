import { useNavigate } from 'react-router-dom';
import construction from '../assets/img/construction-svgrepo-com.svg'

function WIP () {
    const navigate = useNavigate();
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-[#008080] ">
         <div className="flex flex-col gap-3 justify-center items-center text-white bg-red-500  ">
           <img src={construction} className="w-50 h-50"/>
           <h1 className="text-4xl font-bold ">Website is currently in progress!</h1>
           <p className="w-200 text-center text-lg ">Website may appear glitched and incompatible in different browser and device, many bugs may occur during your experience. 
             We apologize for this inconvenience and we're trying to get back as soon as possible!</p>
           <button className="bg-blue-700 h-10 w-30 text-md rounded-3xl shadow-2xl font-semibold" onClick={() => {navigate("/home")}}>Continue</button>
         </div>
       </div>
    )
}

export default WIP;