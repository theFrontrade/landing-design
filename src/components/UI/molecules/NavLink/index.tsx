import React from 'react'

const NavLink =()=>{
    return(
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-xl font-semibold leading-6 text-white">
            Home
          </a>
          <a href="#" className="text-xl font-semibold leading-6 text-white">
            About Us
          </a>
          <a href="#" className="text-xl font-semibold leading-6 text-white">
            Packages
          </a>
        </div>
    )
}
export default NavLink