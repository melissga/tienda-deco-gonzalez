import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import CartView from './components/CartView/CartView';




function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryid' element={<ItemListContainer />} />
            <Route path='/producto/:itemid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
