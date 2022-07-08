import './App.css';
import { useState } from 'react';
//import Hero from './components/Hero';
import Home from './components/Home';
import SearchView from './components/SearchView'
import Navbar from './components/Navbar'
import { Route, Router, Routes} from 'react-router-dom';
function App() {
  const [searchTxt, setSearchTxt]= useState("");
  const [result,setResult]=useState([]);
  const [state,setState]=useState(false);
  return (
    <div className="lib">
      <Navbar searchTxt={searchTxt} setSearchTxt={setSearchTxt} result={result} setResult={setResult} setState={setState}/>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/search" element={<SearchView srch={searchTxt} res={result} state={state}/>} />
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
