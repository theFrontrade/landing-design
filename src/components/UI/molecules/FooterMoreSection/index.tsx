import React from 'react'
import FooterLinks from "../../atoms/Links/FooterLink/index";

const FooterMoreSection =() => {
    return(
        <div className='w-52 py-6 flex flex-col align-start text-start'>
           <p className='text-xl py-4'>More</p>
           <FooterLinks name='Airlinesfee' />
           <FooterLinks name='Airline' />
           <FooterLinks name='Low fare tips' />
        </div>
    )
}
export default FooterMoreSection