//import React, { useState } from 'react';
import ima from "../images/lib.png";
import {Link} from 'react-router-dom';
import { useState } from "react";
const Navbar=(props)=>{

const [stxt,altxt]=useState('');
//const [result,props.setResult]=useState([]);
const setStext=(e)=>{
  //props.setSearchTxt(e.target.value);
//  stxt=stxt+e.target.value;
altxt(e.target.value);
}
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '108543c74cmshb36998e0a928688p194c23jsnc2c86a58c18c',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};
const serch =(e)=>{
  props.setSearchTxt(stxt);
  let citys;
  
  props.setState(false);
  fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${stxt}`, options)
    .then(response => response.json())
    .then(data=>{
      //for(let [obj,i] of data.results)
      //city.push(obj.city);
      //console.log(data);
       citys=data.data.map((no)=>no.city) 
       //console.log(citys)
       props.setResult(citys);
       let tmp=[];
       citys.map((obj,i)=>{
        let city;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj}&APPID=3a179819ba24328a567616d754ecf94a&units=metric`)
        .then(response=>response.json())
        .then(data=>{
            tmp=tmp.concat(data);
            //console.log(data);
            props.setResult(tmp);
            console.log(props.result);
            props.setState(true);
            
        }).then( tmp=[])
        
        
    }
     )
  }
   )

  ///aaaahhhh so made a list of similar searches gotta map them out in the search view 
//dont eleminate te below comment we are finding the list fo cities.. now we have to search weather of each city
  
  

  }
return(

<nav className="navbar navbar-expand-lg sticky-top bg-light" style={{backgroundColor:"rgba(153, 204, 255,0.9)"}}>
  <div className="container-fluid">
    
    <Link className="navbar-brand" to="/">
        <img src={ima} height='60em' className="align-text-center" />  
        My Lib
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/search">search</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to='#'>Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="text" placeholder="Search" value={stxt} aria-label="Search" onChange={setStext}/>

        <Link to='/search'><button className="btn btn-outline-success" type="submit" onClick={serch}>Search</button></Link>
       
      </form>
    </div>
  </div>
</nav>
);

}

export default Navbar;