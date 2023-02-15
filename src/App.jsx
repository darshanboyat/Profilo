import './App.css';
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Aboutme from './Components/Aboutme'
import WhatIDo from './Components/WhatIDo'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import MobilePortfolio from './Components/MobileResponsive/Portforlio'
import MobileWhatIDo from './Components/MobileResponsive/MobileWhatIDo'
import MobileContact from './Components/MobileResponsive/Contact'


// Mobile view imports

import MobileHome from './Components/MobileResponsive/Home'
import MobileNav from './Components/MobileResponsive/MobileNav'
import MobileAboutme from './Components/MobileResponsive/Aboutme'

function App() {
  return (
    <>
      <div className="App hidden lg:block">
        <Sidebar />
        <Home />
        <Aboutme />
        <WhatIDo />
        {/* <Resume /> */}
        <Portfolio />
        <Contact />
      </div>
      <div className="hidden md:block lg:hidden">This site isn't for Tablet devices</div>
      <div className="block lg:hidden">
          <MobileHome/>
          {/* <MobileNav/> */}
          <MobileAboutme/>
          <MobileWhatIDo/>
          <MobilePortfolio/>
          <MobileContact/>
      </div>
    </>
  );
}

export default App;