import {addDoc, collection, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch} from "firebase/firestore"
import { Link } from "react-router-dom";

import { useCartContext } from "../../Context/CartContext"
import CartItem from "./CartItem";
import { useState } from "react";

import "./Cart.css"


export const Cart = () => {
  const{ cartList, deleteCart, totalPrice,  totalQty} = useCartContext()
  const [orderSent, setOrderSent] = useState(false)
  const [orderId, setOrderId] = useState()

  async function createOrder(){

    let order ={}

    order.buyer ={name:"Mateo", email:"mateobariloche28@gmail.com", phone:"111111"}
    order.total = totalPrice()
    order.items= cartList.map(product=>{
      const id = product.id
      const name= product.name
      const price= product.price*product.quantity

      return{id,name,price}
    })

    //crear
    
    const db = getFirestore()

    const queryCollection = collection(db,"orders")
    addDoc(queryCollection, order)
     .then (resp=> setOrderId(resp.id))
     .catch(err => console.log(err))
     .finally(()=>deleteCart())

     //update 
    const queryCollectionStock = collection (db, "products")
     
    const queryUpdateStock = query(
       queryCollectionStock,
       where(documentId(), "in", cartList.map(it => it.id))
    )

    const batch = writeBatch(db)
    await getDocs(queryUpdateStock)
      .then (resp=>resp.docs.forEach(res=>batch.update(res.ref,{
       stock:res.data().stock - cartList.find(product => product.id === res.id).quantity
     })))
     .catch(err => console.log(err))
     .finally(()=>deleteCart())

    batch.commit()
  }

  function sendOrder(){
    setOrderSent(true)
    createOrder()
  }
  
  if(!totalQty()){
    return(

      <div>
        {orderSent 
        ?
        <div>
          <h3>La compra a finalizado correctamente. Gracias por elegirnos!</h3>    
          <h3>Código de seguimiento: {orderId}</h3> 
        </div>
        :
        <h3 className="deleteCart">El carrito esta vacío</h3>}
        <Link to = "/"><button className="bProducto">Ver productos</button></Link>  
      </div>

    )
  }  


  
  return (
    <>   
    
      <section className="mt-5">
        <div className="container">
          <div className="cart">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-color">
                  <tr>
                    <th scope="col" className="text-black">Producto</th>
                    <th scope="col" className="text-black">Precio</th>
                    <th scope="col" className="text-black">Cantidad</th>
                    <th scope="col" className="text-black">Total </th>         
                  </tr>
                </thead>
                {cartList.map(product => <CartItem key={product.id} product={product}/>)}
              </table>
              
            </div>
           </div>
         </div>
      </section>

       <div className="col-lg-4 offset-lg-4">
         <div className="checkout">
           <ul>
             <li className="cart-total">Total ${totalPrice()!== 0 && totalPrice()}</li>
           </ul>
           <a className="proceed-btn" onClick={sendOrder}>Comprar</a>
           <Link to = "/"><button className="bProducto">Seguir comprando</button></Link>
          <button onClick={deleteCart} className="bProducto ms-1">Vaciar carrito</button> 
         </div>
       </div>

    </>
  )
         
}

  





  


                      

                                                      


                        

             
       


                  
