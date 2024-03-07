import React from "react";
import logo from "../assets/logo.png";
import sun from "../assets/icon-sun.svg";
import avatar from "../assets/image-avatar.jpg";
const Navbar = () => {
  return (
    <div>
      <header>
        <div className="bg-[#373B53] fixed w-[100px] min-h-screen flex flex-col justify-start items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className=" absolute bottom-2 flex flex-col items-center gap-6 ">
            <img src={sun} alt="theme toggler" />
            <div className="h-[2px] bg-white w-[95%] " />
            <div>
              <img src={avatar} alt="" className="h-[70px] rounded-full " />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
