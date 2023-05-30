import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "../src/Components/Navbar";
import Home2 from "../src/Components/Home2";
import Menu2 from "../src/Components/Menu2";
import Contact2 from "../src/Components/Contact2";
import NotFound from "../src/Components/NotFound";
import starters from "../src/Data/Starters";
import maincourse from "../src/Data/MainCourse";
import special from "../src/Data/SpecialDishes";
import dessert from "../src/Data/Dessert";
import pizzas2 from './Data/Pizza2';


function App2() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element = {<Home2/>} />
            <Route path='/menu' element = {<Menu2 starters={starters} maincourse={maincourse} special={special} dessert={dessert} pizzas2={pizzas2} />} />
            <Route path='/contact' element = {<Contact2/>} />
            <Route path='*' element = {<NotFound/>} />
          </Routes>
        </Router>
      </div>
    );
  }

  export default App2;