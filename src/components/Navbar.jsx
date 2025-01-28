import { assets } from "../assets/assets"
import { HiBuildingOffice2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="w-full shadow-sm h-24 flex justify-center items-center">
      <div className="w-[90%] flex justify-between">
        <div className="flex gap-2 items-center">
        <img className="w-10 rounded-md" src={assets.logo}/>
        <div className="flex items-center gap-1">
        <p className="font-bold text-sm border-black border-b-2">Others</p>
        <i className="mt-2 fi text-2xl m-1 fi-rr-angle-small-down"></i>
        </div>
        </div> 

        <div className="flex items-center gap-5 text-sm">
        <div>
        <HiBuildingOffice2 />
        <span>Swiggy Corporate</span>
        </div>
        <div>
        <i className="fi fi-rs-city"></i>
        <span>Swiggy Corporate</span>
        </div>
        <div>
        <i className="fi fi-sr-briefcase"></i>
          <span>Search</span>
        </div>
        <div>
        <i className="fi fi-rs-city"></i>
        <span>Offers</span>
        </div>
        <div>
        <i className="fi fi-rs-city"></i>
        <span>Help</span>
        </div>
        <div>
        <i className="fi fi-rs-city"></i>
        <span>Sign in</span>
        </div>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar