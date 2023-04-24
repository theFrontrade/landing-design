import React from 'react'
import PackageCatButton from '../../atoms/Button/PackageCatButton/index';

const PackagesButton = () =>{
    return(
        <div className="flex justify-evenly flex-wrap align-center p-10 pb-20">
          {packagesButton.map((item) => {
            return <PackageCatButton key={item.key} name={item.name} />;
          })}
        </div>
    )
}

export default PackagesButton
const packagesButton = [
    {
      key: 1,
      name: "Hot Deals",
    },
    {
      key: 2,
      name: "Backpack",
    },
    {
      key: 3,
      name: "South Asia",
    },
    {
      key: 4,
      name: "Honeymoon",
    },
    {
      key: 5,
      name: "Europe",
    },
    {
      key: 6,
      name: "More",
    },
  ];