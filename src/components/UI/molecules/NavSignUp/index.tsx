import React from "react";
import Image from "next/image";

export const NavSignUp = () => {
  return (
    <div className="flex">
      <Image
        src="./clarity_favorite-line.svg"
        alt="facebookImg"
        width={30}
        height={10}
      />
      <Image
        
        src="/healthicons_ui-user-profile-outline.png"
        alt="userImg"
        width={35}
        height={20}
        className='mx-4'
      />
    </div>
  );
};
export default NavSignUp;
