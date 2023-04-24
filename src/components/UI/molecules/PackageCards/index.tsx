import React from "react";
import Image from "next/image";
const PackageCards = (props: {
  duration: string;
  price: number;
  description: string;
  location: string;
  link: string;
  image: string;
}) => {
  return (
    <div>
      <div>
        <div
          className="max-w-[400px] h-[495px] flex item-end bg-cover rounded my-[16px] mx-[16px]"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className="w-full bg-[#ffffff] rounded-b lg:py-2 h-[150px] self-end relative py-[10px] px-[10px] ">
            <div className="flex justify-between">
              <p className="text-xl leading-[27px] font-semi-bold">
                {props.duration}
              </p>
              <p className="text-xl leading-[27px] font-semi-bold">{`$ ${props.price} /person`}</p>
            </div>
            <div className="w-full lg:w-5/6 py-4">
              <span className="text-base font-semibold leading-[22px]">
                {props.description}
              </span>
            </div>
            <div className="flex justify-between">
              <div className='flex'> 
              <Image
                src='/ep_location.png'
                alt='locationIcon'
                width={20}
                height={8}
                />
                <span className="text-xl px-1 font-semibold leading-7">
                  {props.location}
                </span>
              </div>
              <span className="text-xl font-semibold leading-7">
                {props.link}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageCards;
