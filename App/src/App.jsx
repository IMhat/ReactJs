import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import  Contacto  from './components/contacto/Contacto';
import CartContextProvider  from './Context/CartContext';

import './App.css'


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
            
          <Navbar/>
          <Routes>
            <Route path ="/" element = {<ItemListContainer/>} />
            <Route path ="/category/:category" element = {<ItemListContainer/>} />
            <Route path='/detail/:id' element = {<ItemDetailContainer/>} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/Contacto' element = {<Contacto/>} />
            <Route path= "/*" element = {<Navigate to  = "/" replace />} />
          </Routes>
        
      </CartContextProvider>
    </BrowserRouter>
  )
}
  
  







          
          
              
          
        


          
            
            
            
          
        
    
            

            
          
          
          
                  

export default App
  
      
      
    
     
    
      
      
      







  
      
      
      


      
            



