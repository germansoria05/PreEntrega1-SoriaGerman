import "./App.css";
import NavBar from "./components/NAvBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Itemlistcontainer from './components/ItemListContainer/Itemlistcontainer'


function App() {
  const enlaces = ["Bicicletas", "Respuestos", "Accesorios"];

  return (
    <>
      <h1></h1>

      <NavBar links={enlaces} />
      {<Itemlistcontainer greeting={'Aprovecha los descuentos'}/>}
      <ItemDetailContainer />
    </>
  );
}
export default App;
