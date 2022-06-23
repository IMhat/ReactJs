import {NavLink} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

import CartWidget from "../CartWidget/CartWidget";
import logo from '/src/img/logo.jpg'

import "./Navbar.css";



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
                        <NavLink to = '/Contacto'>Contacto</NavLink>            
                        <CartWidget /> 
                        </nav>
                </div>
            </header>
                            
            <div className="capa"></div>
            <input type="checkbox" id="btn-menu" />
            <div className="container-menu">
                <div className="cont-menu">
                    <nav>
                    <NavLink to = '/'>Inicio</NavLink>
                    <NavLink to = '/Contacto'>Contacto</NavLink>   
                        <NavLink to = '/category/TarjetasGraficas'>Tarjetas Graficas</NavLink>
                        <NavLink to = '/category/Procesadores'>Procesadores</NavLink>
                        <NavLink to = '/category/Gabinetes'>Gabinetes</NavLink>
                        
                        <CartWidget/> 
                    </nav>
                    <label htmlFor="btn-menu" className="icon-equis"><FiChevronLeft/></label>
                </div>
            </div>
        </>
    
    )
}


export default Navbar