import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Menu from "../src/Components/Menu";
import Contact from "../src/Components/Contact";
import NotFound from "../src/Components/NotFound";
import entrantes from "./Data/Entrantes.js";
import dessert from "./Data/Dessert";
import mainCourse from "./Data/MainCourse";
import platoEspecial from "./Data/PlatoEspecial";
import platoPrincipal from "./Data/PlatoPrincipal";
import postre from "./Data/Postre";
import specialDishes from "./Data/SpecialDishes";
import starters from "./Data/Starters";
import pizzas from './Data/Pizzas';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/menu' element = {<Menu entrantes={entrantes} platoPrincipal={platoPrincipal} platoEspecial={platoEspecial} postre={postre} pizzas={pizzas} />} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='*' element = {<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
