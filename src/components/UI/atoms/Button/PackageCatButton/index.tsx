import React from 'react'
const PackageCatButton = (props: {name: string | number}) => {
    return (
      <button
        className="w-[180px] h-[60px] bg-[#666666] rounded-md text-xl font-bold text-[#ffffff] my-[12px] shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.name}
      </button>
    );
  };
export default PackageCatButton