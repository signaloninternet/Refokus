import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/products/Products';
import Marquees from './components/marquees/Marquees';
import Cards from './components/cards/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div className="w-full bg-zinc-900 text-white">
     <Navbar />
     <Work />
     <Stripes />
     <Products />
     <Marquees />
     <Cards />
     <Footer />
    </div>
  );
}

export default App;
