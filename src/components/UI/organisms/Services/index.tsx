 import React from "react";
  import ServiceCards from "../../molecules/ServiceCards";

 const Services = () => {
    return (
      <div className="py-24 px-8 bg-[#e5e5e5] ">
        <h5 className='text-center text-[40px] font-bold text-7xl py-10'>Our Services</h5>
        <div className="flex align-center flex-wrap justify-evenly">
          {ServiceItems.map((item) => (
            <ServiceCards
              key={item.key}
              name={item.name}
              description={item.description}
              alt={item.alt}
              src={item.src}
            />
          ))}
        </div>
      </div>
    );
  };

 export default Services

 const ServiceItems = [
    {
      key: 1,
      name: "Ticket Booking",
      description:
        "We book all king of national or international ticket for your destination.",
      src: "/Vector.svg",
      alt: "ticketImg",
    },
    {
      key: 2,
      name: "Hotel Booking",
      description:
        "Your can easily book yout acording yto your budget hotel by our wbsite",
      src: "./carbon_hotel.svg",
      alt: "ticketImg",
    },
    {
      key: 3,
      name: "Ticket Booking",
      description:
        "We book all king of national or international ticket for your destination.",
      src: "./Vectors.svg",
      alt: "ticketImg",
    },
  ];