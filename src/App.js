import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './estilos/estilos.scss'

import { Nosotros } from './components/Nosotros';
import { Contacto } from './components/Contacto';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { Cartprovider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout, } from './components/checkout/checkout';



function App() {

 

  return (
    <Cartprovider>
      <BrowserRouter>

        <NavBar />


        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='Productos/:catId' element={<ItemListContainer/>} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          
        </Routes>

        

      </BrowserRouter>
      </Cartprovider>
  );
}

export default App;

