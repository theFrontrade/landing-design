import React from "react";
export const SecondaryButton = (props:{name: string}) =>{
    return(
        <button className="rounded-md bg-[#00a651] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{props.name}</button>
    )
}
export default SecondaryButton