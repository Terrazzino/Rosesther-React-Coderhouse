import logo from './assets/images/rosesther-logo.png';
import './assets/css/App.css';

//IMPORTAR COMPONENTES
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget'
import {ItemListContainer} from './components/ItemListContainer';
import UncontrolledExample from './components/Carrousel';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>
      <div className="App bg-black text-white">
        <header>
          <UncontrolledExample/>
        </header>
        <section className="NavBar">
          <Link to="/"><img src={logo} className="Logo" alt="logo"/></Link>
          <NavBar name="Inicio"/>
          <NavBar name="Historia"/>
          <Link style={{textDecoration:"none"}} to="/"><NavBar name="Productos"/></Link>
          <NavBar name="Contactos y Redes"/>
          <CartWidget/>
        </section>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:style" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
