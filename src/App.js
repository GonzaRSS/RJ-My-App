import { ItemListCointainer } from './components/itemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '//estilos/estilos.css';
import '//estilos/global.css';

import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { Cartprovider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';


function App() {

 

  return (
    <Cartprovider>
      <BrowserRouter>

        <NavBar />


        <Routes>
          <Route path="/" element={<itemListContainer />} />
          <Route path='Productos/:catId' element={<itemListContainer/>} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

      </BrowserRouter>
      </Cartprovider>
  );
}

export default App;

