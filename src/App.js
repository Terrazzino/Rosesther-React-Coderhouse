import logo from './assets/images/rosesther-logo.png';
import './assets/css/App.css';

//IMPORTAR COMPONENTES
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer';
import UncontrolledExample from './components/Carrousel'

function App() {
  return (
    <div className="App">
      <header>
        <UncontrolledExample/>
      </header>
      <section className="NavBar">
        <img src={logo} className="Logo" alt="logo"/>
        <NavBar name="Scottish"/>
        <NavBar name="Golden"/>
        <NavBar name="Dorada Pampeana"/>
        <NavBar name="Porter"/>
        <NavBar name="Ipa"/>
        <CartWidget/>
      </section>
      <ItemListContainer/>
    </div>
  );
}

export default App;
