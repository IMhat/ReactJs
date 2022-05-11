import { useState } from "react";
import "./ItemCount.css"


export function ItemCount({stock,initial,onAdd}){

    const [count, setCount] = useState (initial)

    function sumar(){
        if(count < stock){
            setCount (count+1);
        }
    } 
    function restar(){
        if (count > 1){
            setCount(count-1);            
        }
    }

    function agregar(){
        onAdd (count);
    }

    return(
        <div className="galeria">
            <div className="card">
            <img className="imgCard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7X3zMO8gcHo97fXQnGnDTWbseptRrTOnXA&usqp=CAU" alt="" />
            <h3>Producto</h3>
            <h6>$250,000</h6>
                <div>
                    <button  onClick={restar} >-</button>
                    <button  onClick={sumar}>+</button>
                    <p>{count}</p>
                    <button className="bCard" onClick={agregar}>Agregar</button>
                </div>
            </div>
        </div>
        
        
    )    

}
       