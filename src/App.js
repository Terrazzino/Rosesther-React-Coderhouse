import logo from './assets/images/rosesther-logo.png';
import './assets/css/App.css';

//IMPORTAR COMPONENTES
import NavBar from './components/Nav/NavBar';
import CartWidget from './components/Nav/CartWidget'
import {ItemListContainer} from './components/ItemList/ItemListContainer';
import UncontrolledExample from './components/Nav/Carrousel';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ItemDetailContainer from './components/Details/ItemDetailContainer';
import {Inicio} from './components/Nav/Inicio'
import {useState} from 'react'
import {CustomProvider} from './components/Context/CartContext'
import {Cart} from './components/Cart/Cart'

function App() {
  const [count,setCount]=useState(0);
  const totalCount=(number)=>{
    setCount(count+number);
  }

  return (
    <CustomProvider>
      <BrowserRouter>
        <div className="App bg-black text-white">
          <header>
            <UncontrolledExample/>
          </header>
          <section className="NavBar">
            <Link to="/"><img src={logo} className="Logo" alt="logo"/></Link>
            <Link style={{textDecoration:"none"}} to="/inicio"><NavBar name="Inicio"/></Link>
            <NavBar name="Historia"/>
            <Link style={{textDecoration:"none"}} to="/"><NavBar name="Productos"/></Link>
            <NavBar name="Contactos y Redes"/>
            <CartWidget/>
          </section>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:style" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer onAdd={totalCount}/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;