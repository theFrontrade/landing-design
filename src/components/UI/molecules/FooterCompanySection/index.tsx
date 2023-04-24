import React from 'react'
import FooterLinks from '../../atoms/Links/FooterLink/index'

const FooterCompanySection =() => {
    return(
        <div className='w-52 py-6 flex flex-col align-start text-start' >
            <p className='text-xl py-4'>Company</p>
            <FooterLinks name='About' />
            <FooterLinks name='Careers' />
            <FooterLinks name='Mobile' />
        </div>
    )
}
export default FooterCompanySection