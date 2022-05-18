
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';




function App() {
  
  
  return (
    <BrowserRouter>
      <div>       
        <Navbar/>

        <Routes>
          <Route path ="/" element = {<ItemListContainer/>} />
          <Route path ="/category/:id" element = {<ItemListContainer/>} />
          <Route path='/detail/:id' element = {<ItemDetailContainer/>} />
          <Route path='/cart' element = {<Cart/>} />

          <Route path= "/*" element = {<Navigate to  = "/" replace />} />
          
          
              
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App