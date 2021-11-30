import React from 'react';
import '../style/Main.css'
import { useEffect } from 'react';
import db from './firebase';
import Navbar from './Navs/Navbar';
import Home from './Home/Home';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    Aos.init({duration : 1000});
  })
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
