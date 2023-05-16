import React , {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const ImageSlider = () => {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1557064262-6acc904bffbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80',
          title: 'Factory',
        },
        {
          url: 'https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1437&q=80',
          title: 'Steel',
        },
        {
          url: 'https://images.unsplash.com/photo-1571106875244-21abe17e2c71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1437&q=80',
          title: 'Metal',
        },
        {
          url: 'https://images.unsplash.com/photo-1529479627062-5f1f0b88912a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80',
          title: 'Sparks',
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide = currentIndex ===0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
        setCurrentIndex(newIndex);
      }

      const nextSlide = () => {
        const isLastSlide = currentIndex === (slides.length -1)
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      }

    return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-10 px-4 relative group">
        <div    
            className="w-full h-full rounded-l bg-center bg-cover duration-500" 
            style={{backgroundImage: `url(${slides[currentIndex].url})` }}>
            

            <div className='w-full bg-gray-300/70 py-4 px-4'>
                <div className='max-w-[1240px]'>
                    <div className='flex flex-col justify-center text-left pl-4'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase'>Discover the future of steel industry</h1>
                        <p className='text-orange-400 font-bold'>Logatec, Slovenia</p>
                    </div>
                </div>
            </div>





        </div>
        <div className='absolute top-[50%]  left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='absolute top-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20  text-white cursor-pointer'>
            <BsChevronCompactRight onClick = {nextSlide} size={30}/>
        </div>
    </div>
  )
}

export default ImageSlider
