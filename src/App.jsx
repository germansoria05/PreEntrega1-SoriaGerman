
import './App.css'
import NavBar from './components/NAvBar/Navbar'
import Greeting from './components/Greeting/Greeting'
import Card from './components/Card/Card'
import CardContainer from './components/CardContainer/CardContainer'


function App() {
 
  const enlaces = [
    "Inicio",
    "Bicicletas",
    "Respuestos",
    "Contactos",
  ]
 
  return (
    <>
    <h1>Hola Mundo</h1>
   <NavBar links={enlaces}/>  
   <Greeting/>
   <CardContainer>
   <Card/>
   </CardContainer>
 
    </>
  )
}
export default App
