import "./navbar.css"

const NavBar  =()=> {
   
    return (
        <nav>
        <h1 className="titulo">Pina-Shop</h1>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Bicletas</a></li>
            <li><a href="#">Repuestos</a></li>
            <li><a href="#">Contacto</a></li>

        </ul>
          <img className="imagen" src="../src/img/carrito-de-compras.png" alt="Carro de compras" />
        </nav>
    )

}

export default NavBar;