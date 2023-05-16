import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import { Home } from './pages/Home';
import { SteelServiceCentre } from './pages/SteelServiceCentre';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Sustainability } from './pages/Sustainability';

import './App.css';

function App() {
  return (
    // a fragment, these empty brackets, lets us render multiple things at once
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steel-service-centre" element={<SteelServiceCentre />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
    </>
  )
}

export default App;
