import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState, createContext } from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import CartContextProvider  from './Context/CartContext';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div>       
          <Navbar/>
          <Routes>
            <Route path ="/" element = {<ItemListContainer/>} />
            <Route path ="/category/:category" element = {<ItemListContainer/>} />
            <Route path='/detail/:id' element = {<ItemDetailContainer/>} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path= "/*" element = {<Navigate to  = "/" replace />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}
  
  







          
          
              
          
        


          
            
            
            
          
        
    
            

            
          
          
          
                  

export default App
  
      
      
    
     
    
      
      
      







  
      
      
      


      
            



