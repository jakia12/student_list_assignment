import React from "react";
import logo from "../../assets/lws-logo-en.svg";

const header = () => {
  return (
    <div>
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img className="h-[40px]" src={logo} alt="Lws" />
          </a>

          <a className="px-5 py-2.5 bg-[#038C61] rounded-[44px] btn" href="#">
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
};

export default header;
