import React from 'react';
import { useEffect } from 'react';
import db from './firebase';
function App() {
  useEffect(()=>{
    db.collection('Projects').doc('IgdWBhfWk8IoJqrhhugS').collection('One').onSnapshot((snap)=>{
      snap.docs.map((doc)=>{
        console.log(doc.data());
      })
    })
  })
  return (
    <div className="App">
      udcyudc
    </div>
  );
}

export default App;
