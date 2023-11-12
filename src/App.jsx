import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NAvBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Itemlistcontainer from './components/ItemListContainer/Itemlistcontainer'
import { links } from "react-router-dom";
import CartView from "./components/CartView/CartView";



function App() {
  const enlaces = ["Bicicletas", "Respuestos", "Accesorios"];

  return (
    <>
   <BrowserRouter>
   <NavBar links={enlaces} />
   
    <Routes>
      <Route 
      path="/" 
      element={<Itemlistcontainer greeting={'Aprovecha los descuentos'}/>}
      />
     
      <Route 
      path="/category/:categoryId"
       element={<Itemlistcontainer greeting={'Aprovecha los descuentos'}/>}
      />
      
      <Route 
        path="/item/:itemId" element= 
        {<ItemDetailContainer />} />
      
      <Route path="/carrito" element ={<CartView/>} />
      </Routes>
      </BrowserRouter>
    
    </>
    
  );
}
export default App;
