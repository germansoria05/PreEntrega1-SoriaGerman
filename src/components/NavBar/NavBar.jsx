import "./navbar.css";
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1 className="titulo">Pina-Shop</h1>
      <ul>
        <li>
          <Link to={"/category/bicicletas"}>Bicicletas</Link>
        </li>

        <li>
          <Link to={"/category/repuestos"}>Repuestos</Link>
        </li>

        <li>
          <Link to={"/category/accesorios"}>Accesorios</Link>
        </li>
      </ul>
      <Cartwidget />
    </nav>
  );
};

export default NavBar;
