import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';


function App() {

  return (
    <div className='App'>
      <header>
        <Navbar/>
      </header>

      <ItemListContainer greeting='Container'/>

    </div>
  )

}


export default App
