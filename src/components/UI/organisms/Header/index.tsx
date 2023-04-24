import React from "react";
import NavLogo from "../../molecules/NavLogo/index";
import NavLink from "../../molecules/NavLink/index";
import NavSignUp from "../../molecules/NavSignUp/index";
const Header = () => {
  return (
    <div className="flex flex-row">
      <nav
        className="flex items-center justify-between p-6 lg:px-6 w-11/12 lg:14/15 mx-auto"
        aria-label="Global"
      >
        <NavLogo />
        <NavLink />
        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <NavSignUp />
        </div>
      </nav>
    </div>
  );
};

export default Header;
