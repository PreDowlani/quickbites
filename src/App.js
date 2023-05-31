import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Menu from "../src/Components/Menu";
import Contact from "../src/Components/Contact";
import NotFound from "../src/Components/NotFound";
import entrantes from "./Data/Entrantes.js";
import platoEspecial from "./Data/PlatoEspecial";
import platoPrincipal from "./Data/PlatoPrincipal";
import postre from "./Data/Postre";
import pizzas from './Data/Pizzas';

const lang = {
  en : "English",
  es : "Spanish",
  de : "German"
}

function App() {

 const {t, i18n} = useTranslation();

 const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
}

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar changeLanguage={changeLanguage}/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/menu' element = {<Menu entrantes={entrantes} platoPrincipal={platoPrincipal} platoEspecial={platoEspecial} postre={postre} pizzas={pizzas}  />} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='*' element = {<NotFound/>} />
        </Routes>
      </Router>        
      </Suspense>

    </div>     

  );
}

export default App;
