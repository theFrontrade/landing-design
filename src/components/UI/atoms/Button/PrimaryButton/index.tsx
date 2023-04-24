import React from "react";

const PrimaryButton = (props: {name: string | number}) => {
  return (
    <button
      className="rounded-md bg-[#00a651] px-3.5 py-2.5 text-sm font-semibold text-[#ffffff] shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {props.name}
    </button>
  );
};
export default PrimaryButton