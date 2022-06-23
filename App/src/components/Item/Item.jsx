import { Link } from "react-router-dom"
import "./Item.css"



const Item = ({name, price,img,id}) =>{
    return(
        <div className="gallery">
        <Link to= {`/detail/${id}`} >
            <div className="card">
                <img className="imgCard" src={img} alt="" />
                <h3 className="nameCard">{name}</h3>
                <h6 className="priceCard">${price}</h6>
                <button className="bCard">Detalle</button>
            </div>
        </Link>
        </div>
    )
}

export default Item
            
        

                
                
                
                