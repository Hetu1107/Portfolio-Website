import React from 'react';
import '../style/Main.css'
import { useEffect } from 'react';
import db from './firebase';
import Navbar from './Navs/Navbar';
import Home from './Home/Home';
function App() {
  // useEffect(()=>{
  //   db.collection('Projects').doc('IgdWBhfWk8IoJqrhhugS').collection('One').onSnapshot((snap)=>{
  //     snap.docs.map((doc)=>{
  //       console.log(doc.data());
  //     })
  //   })
  // })
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
