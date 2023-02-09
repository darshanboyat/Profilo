import './App.css';
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Aboutme from './Components/Aboutme'
import WhatIDo from './Components/WhatIDo'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <Aboutme/>
      <WhatIDo/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
