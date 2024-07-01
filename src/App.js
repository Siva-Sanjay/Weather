import './App.css';
import { useState } from 'react';
import CityView from './components/CityView';
//import Hero from './components/Hero';
import Home from './components/Home';
import SearchView from './components/SearchView'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  //const [citys,setCitys]=useState({0:''})
  return (
    <div className="main">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/search/city/:id" element={ <CityView/> } />
        <Route path="/search/:src" exact element={<SearchView />} />
      </Routes>

     {/* <Router>
        <Route path="/"  component={Home} />
    
        <Route path="/search" component={SearchView}/> 
        </Router>
     */}
    </div>
  );
}

export default App;
