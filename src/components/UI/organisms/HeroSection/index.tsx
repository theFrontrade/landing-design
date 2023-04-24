import React from "react";
import HeroDiscoverMoreButton from '../../atoms/Button/HeroDiscoverMore/index'
const HeroSection = () => {
  return (
    <div className="h-5/6 flex align-center justfy-center ">
      <div className="h-3/6 py-4 text-center flex flex-col align-center justify-between my-auto mx-auto ">
        <h1 className="text-[2rem] font-extrabold tracking-tight text-white  sm:text-xxl ">
          Your Imagination is <br /> your Only Limit
        </h1>
        <p className="mt-6 text-base leading-8 text-white">
          We always try to make our customer Happy. we provide all kind of
          facilities. <br /> Your satisfaction is our main priority
        </p>
        <div className="mt-5 flex items-center justify-center gap-x-6">
            <HeroDiscoverMoreButton />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
