import "./navbar.css"
import Cartwidget from "../Cartwidget/Cartwidget";

const NavBar  =()=> {
   
    return (
        <nav>
        <h1 className="titulo">Pina-Shop</h1>
        <ul>
            
            <li><a href="#">Bicletas</a></li>

            <li><a href="#">Repuestos</a></li>

            <li><a href="#">Accesorios</a></li>
            
            
        </ul>
          <Cartwidget/>
        </nav>
    )

}

export default NavBar;