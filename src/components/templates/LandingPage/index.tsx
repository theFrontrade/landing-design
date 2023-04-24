import React from "react";
import Header from "../../UI/organisms/Header/index";
import HeroSection from "../../UI/organisms/HeroSection/index";
import Services from "../../UI/organisms/Services/index";
import BestPackage from "../../UI/organisms/BestPackages/index";
import Footer from "../../UI/organisms/Footer/index";
const LandingPage = () => {
  return (
    <div className=" bg-white ">
      <div>
        <div
          className="h-screen bg-cover bg-no-repeat "
          style={{ backgroundImage: `url('./heroBg.svg')` }}
        >
          <div className='h-screen' style={{backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.81) 0%, rgba(72, 72, 72, 0) 31.25%, rgba(158, 158, 158, 0) 77.6%, rgba(72, 72, 72, 0) 85.42%)"}}>
          <Header />
          <HeroSection /> 
          </div>
          
        </div>
        <Services />
        <BestPackage />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
