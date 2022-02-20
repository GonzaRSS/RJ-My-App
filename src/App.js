import { ItemListCointainer } from './components/itemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar';
import { Nosotros } from './components/NavBar/Nosotros'
import { Contacto } from './components/NavBar/Contacto'
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { Cartprovider } from './context/CartContext'
import { Cart } from './components/Cart/Cart';



function App() {

 

  return (
    <Cartprovider>
      <BrowserRouter>

        <NavBar />


        <Routes>
          <Route path="/" element={<ItemListCointainer />} />
          <Route path='/Productos/:catId' element={<ItemListCointainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </BrowserRouter>
      </Cartprovider>
  );
}

export default App;

