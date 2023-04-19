import React from "react"
import Image from 'next/image'
export const FirstContainer = () => {
    return(
        <div className="flex flex-col item-center 100vh justify-between">
            <div></div>
            <div><ul>
                <li>Home</li>
                <li>About us</li>
                <li>Packages</li>
                </ul>
                </div>
            <div>
                <Image
                alt="star-icon"
                src="./"
                />
            </div>

        </div>
    )
}