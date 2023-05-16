import React from 'react';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className="w-full text-2xl py-4 font text-white/30 text-left border-b-4 border-gray-500/30">EXTERFER</h1>
            <img src="" alt="" />

        </div>
        <div className='xl:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Contact</h6>
                <p className='py-4'>Steely Dan</p>
                <p>steelplease@contact.com</p>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Address</h6>
                <p className='py-4'>123 Steel Factory, Steel St, Slovenia</p>

            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Links</h6>
                <p className='py-4'>An important link</p>
            </div>
        </div>
    </div>
  )
}

export default Footer