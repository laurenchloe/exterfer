import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    
    <div className="flex justify-between items-center h-24 max-w-[1920px] mx-auto px-4 text-white">
        <Link to='/'>
          <h1 className="w-[80%] text-3xl font-bold text-white uppercase items-center hover:text-[#FF6600]">Exterfer</h1>
        </Link>
        <ul className='hidden md:flex uppercase'>
            <li className="p-4 hover:text-[#FF6600]"><Link to='/steel-service-centre'>Steel Service Centre</Link></li>
            <li  className="p-4 hover:text-[#FF6600]"><Link to='/products'>Products</Link></li>
            <li className="p-4 hover:text-[#FF6600]"><Link to='/about'>About</Link></li>
            <li className="p-4 hover:text-[#FF6600]"><Link to='/sustainability'>Sustainability</Link></li>
        </ul>
    
      {/* toggle button appearance on click */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10' : 'fixed left-[-100%] ease-out top-0 duration-400'}>
          <h1 className="w-full text-3xl font-bold text-white uppercase p-4 m-4"><Link to='/'>Exterfer</Link></h1>

          <ul className='uppercase p-4'>
            <li  className="p-4 border-b border-gray-600 hover:text-[#FF6600]"><Link to='/steel-service-centre'>Steel Service Centre</Link></li>
            <li className="p-4 border-b border-gray-600 hover:text-[#FF6600]"><Link to='/products'>Products</Link></li>
            <li className="p-4 border-b border-gray-600 hover:text-[#FF6600]"><Link to='/about'>About</Link></li>
            <li className="p-4 hover:text-[#FF6600]"><Link to='/sustainability'>Sustainability</Link></li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar