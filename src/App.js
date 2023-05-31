import './App.css';
import { Suspense } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Menu from "../src/Components/Menu";
import Contact from "../src/Components/Contact";
import NotFound from "../src/Components/NotFound";
// import entrantes from "./Data/Entrantes.js";
// import platoEspecial from "./Data/PlatoEspecial";
// import platoPrincipal from "./Data/PlatoPrincipal";
// import postre from "./Data/Postre";
// import pizzas from './Data/Pizzas';
import entrantesEs from "./Menu/Spanish/Starters.json";
import platoPrincipalEs from "./Menu/Spanish/MainCourse.json";
import platoEspecialEs from "./Menu/Spanish/SpecialDishes.json";
import postreEs from "./Menu/Spanish/Dessert.json";
import pizzasEs from "./Menu/Spanish/Pizzas.json";

import entrantesEn from "./Menu/English/Starters.json";
import platoPrincipalEn from "./Menu/English/MainCourse.json";
import platoEspecialEn from "./Menu/English/SpecialDishes.json";
import postreEn from "./Menu/English/Dessert.json";
import pizzasEn from "./Menu/English/Pizzas.json";

import entrantesDe from "./Menu/German/Starters.json";
import platoPrincipalDe from "./Menu/German/MainCourse.json";
import platoEspecialDe from "./Menu/German/SpecialDishes.json";
import postreDe from "./Menu/German/Dessert.json";
import pizzasDe from "./Menu/German/Pizzas.json";




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
          {/* <Route path='/menu' element = {<Menu entrantes={entrantes} platoPrincipal={platoPrincipal} platoEspecial={platoEspecial} postre={postre} pizzas={pizzas}  />} /> */}
          <Route  path='/menu' element={<Menu 
                entrantes={{
                  en: entrantesEn,
                  es: entrantesEs,
                  de: entrantesDe,
                }}
                platoPrincipal={{
                  en: platoPrincipalEn,
                  es: platoPrincipalEs,
                  de: platoPrincipalDe,
                }}
                platoEspecial={{
                  en: platoEspecialEn,
                  es: platoEspecialEs,
                  de: platoEspecialDe,
                }}
                postre={{
                  en: postreEn,
                  es: postreEs,
                  de: postreDe,
                }}
                pizzas={{
                  en: pizzasEn,
                  es: pizzasEs,
                  de: pizzasDe,
                }}/>}/>
          <Route path='/contact' element = {<Contact/>} />
          <Route path='*' element = {<NotFound/>} />
        </Routes>
      </Router>        
      </Suspense>
    </div>     

  );
}

export default App;
