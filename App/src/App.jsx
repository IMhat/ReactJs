import { useState } from 'react'


import './App.css'
import './components/Navbar/Navbar.css'



import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {

  return (
      <>
        
        <Navbar/>
        <ItemListContainer saludo={"Soy el componente contenedor"}/>
        
                  
        
      </>
  )

}


export default App
