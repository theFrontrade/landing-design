import Reat from 'react'
import Image from "next/image";

const FooterDiscoverSection = () =>{
    return(
        <div className='w-58 py-6'>
            <div className='flex py-4'>
                <Image
                src='/facebookLogo.svg'
                alt='facebookImg'
                width={60}
                height={30}
                />
                <Image
                src='/instagramLogo.png'
                alt='instagramImg'
                width={60}
                height={83}
                />
            </div>
            <span className='text-xl text-[#5e6282] leading-10 font-normal'>Discover the app</span>
            <div className='flex py-4'>
            <Image
                src='/Google Play.svg'
                alt='GoogleplayImg'
                width={100}
                height={80}
                className='px-0.5'
                />
                <Image
                src='/Play Store.svg'
                alt='Apple Store'
                width={100}
                height={80}
                className='px-0.5'
                />
                
            </div>
        </div>
    )
 }
export default FooterDiscoverSection