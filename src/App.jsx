import './App.css'
import NavBar from './components/NAvBar/Navbar'
import Itemlistcontainer from './components/ItemListContainer/Itemlistcontainer'



function App() {
 
  const enlaces = [
    "Inicio",
    "Bicicletas",
    "Respuestos",
    "Contactos",
  ]
  
  const greeting = 'Aprovecha los descuentos'
 
  return (
    <>
    <h1></h1>
   
   <NavBar links={enlaces}/>  
   <Itemlistcontainer greeting={greeting}/>
  
 
    </>
  )
}
export default App
