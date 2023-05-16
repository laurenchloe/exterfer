import React from 'react'
import {Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='max-w-[1400px] h-[500px] w-full m-auto py-10 px-4 relative bg-factory bg-size-100 bg-cover bg-center'> 
            <div className='flex flex-col justify-center items-center'>
                <h2 className='md:text-5xl sm:text-4xl text-3xl text-white text-bold text-center pb-10 pt-0'>Contact our sales team today.</h2>
                <button className='text-black bg-[#FF6600] w-[200px] rounded-sm font-medium my-6 py-3 mx-auto'><Link to='mailto:recipient@example.com?subject=Exterfer%20Sales%20Enquiry&body=Please%20enter%20your%20message%20here.'>Contact Us</Link></button>
            </div>
    </div>
    )
}

export default CTA