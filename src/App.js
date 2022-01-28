import {ItemListCointainer} from './itemList/ItemListContainer'
import { MainContent } from './components/MainContent'
import { Encabezado } from './components/Encabezado'
import './estilos.css'
import { NavBar } from './NavBar/NavBar';
function App() {

  return (
    <div>
      <NavBar/>
        <ItemListCointainer greeting={"hola!!"}/> 
        <Encabezado/>  
        <MainContent/>
    </div>
    
  );
}

export default App;
