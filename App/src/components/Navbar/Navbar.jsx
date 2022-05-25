
import {NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from '../../img/logo1.png'
import { FiMenu } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";


function Navbar (){
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="btn-menu">
                        <label htmlFor="btn-menu" className="icon-menu"> <FiMenu/> </label>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" width={50}/>
                    </div>
                        <nav className="menu">
                        <NavLink to = '/'>Inicio</NavLink>
                        <NavLink to = '/'>Nosotros</NavLink>
                        <NavLink to = '/'>Contacto</NavLink>
                        </nav>
                </div>
            </header>
                            
            <div className="capa"></div>
            <input type="checkbox" id="btn-menu" />
            <div className="container-menu">
                <div className="cont-menu">
                    <nav>
                        <NavLink to = '/'>Inicio</NavLink>
                        <NavLink to = '/category/remeras'>Tarjetas Graficas</NavLink>
                        <NavLink to = '/category/camisas'>Procesadores</NavLink>
                        <NavLink to = '/category/pantalones'>Gabinetes</NavLink>
                        <CartWidget/>
                    </nav>
                    <label htmlFor="btn-menu" className="icon-equis"><FiChevronLeft/></label>
                </div>
            </div>
        </>
    )
}


export default Navbar