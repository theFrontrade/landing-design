import React from "react";
import Image from "next/image";

const ServiceCards = (props: {
    src: string;
    name: string;
    description: string;
    alt: string;
  }) => {
    return (
      <div className="w-[370px] h-[210px] relative top-0 left-0 px-[40px] flex flex-col justify-between align-start py-[20px] my-[35px] rounded-2xl bg-[#f9f9f9] shadow-[0px 4px 16px rgba(0,0,0,0.15)]">
        <Image
          src={props.src}
          alt={props.alt}
          width={45}
          height={10}
          className="px-0.5"
        />
  
        <p className="font-bold text-2xl">{props.name}</p>
        <span className="text-base ">{props.description}</span>
      </div>
    );
  };
export default ServiceCards