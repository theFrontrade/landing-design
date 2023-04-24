import React from "react";
import PackageCards from "../../molecules/PackageCards";
import PackagesButton from "../../molecules/PackagesButton"
import DiscoverMoreButton from '../../atoms/Button/DiscoverMore/index'

const BestPackages = () => {
  return (
    <div className='bg-[#ECF1F0] py-8 pb-24'>
      <h2 className="text-center text-[40px] font-bold py-8" >Best Packages For You</h2>
       <div>
        <PackagesButton />
       </div>
      <div className="flex justify-evenly align-center flex-wrap">
        {PackagesData.map((item) => {
          return (
            <PackageCards
              key={item.key}
              duration={item.duration}
              price={item.price}
              description={item.description}
              location={item.location}
              link={item.link}
              image={item.image}
            />
          );
        })}
      </div>
      <div className='w-full pt-16 flex align-center justify-center'>
      <DiscoverMoreButton />
      </div>
     
    </div>
  );
};
export default BestPackages;

const PackagesData = [
  {
    key: 1,
    duration: "3 days, 2 Nights",
    price: 500,
    description:
      "Explore the beauty of island for 3 days and 2 nights with our travel agency",
    location: "indonesia",
    link: "Know More",
    image: "./indonesia.svg",
  },
  {
    key: 2,
    duration: "3 days, 2 Nights",
    price: 800,
    description:
      "Enjoy the Shrimes and blossoms here in this beautiful country",
    location: "Japan",
    link: "Know More",
    image: "./japan.svg",
  },
  {
    key: 3,
    duration: "3 days, 2 Nights",
    price: 600,
    description: "Explore the majestic mountains and landscapes day and nights",
    location: "mountains",
    link: "Know More",
    image: "./mountains.svg",
  },
];
