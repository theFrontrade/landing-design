import react from 'react'
const FooterLinks = (props: {name: string}) => {
    return(
        <a className='text-lg text-[#5e6282] leading-10 font-normal'  href="http://" target="_blank" rel="noopener noreferrer">{props.name}</a>
    )
}

export default FooterLinks