import React from 'react'
import FooterLogo from '../../molecules/FooterLogo'
import FooterCompanySection from '../../molecules/FooterCompanySection'
import FooterContactSection from '../../molecules/FooterContactSection'
import FooterMoreSection from '../../molecules/FooterMoreSection'
import FooterDiscoverSection from '../../molecules/FooterDiscoverSection'


 const Footer = () => {
    return(
        <div className='bg-[#E5E5E5] py-20'>
            <div className='w-full flex align-center justify-evenly flex-wrap ' >
            <FooterLogo />
            <FooterCompanySection />
            <FooterContactSection />
            <FooterMoreSection />
            <FooterDiscoverSection />
   
        </div>
        <p className='text-center text-[#5e6282] font-semi-bold pt-16'>Allrights reserved@travelgoo.co</p>
        </div>
        
    )
}
export default Footer