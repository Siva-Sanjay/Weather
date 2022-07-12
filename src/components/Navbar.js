//import React, { useState } from 'react';
import ima from "../images/lib.png";
import {Link} from 'react-router-dom';
import { useState } from "react";
const Navbar=(props)=>{

const [stxt,altxt]=useState('');
let temp;
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
  temp=stxt;
  altxt('');
  props.setState(false);
  fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${temp}`, options)
    .then(response => response.json())
    .then(data=>{
      //for(let [obj,i] of data.results)
      //city.push(obj.city);


      //we are mapping a list of the city names, converting it into set and reconverting it to an array to eliminate evevry duplicate occurance
       citys=new Set(data.data.map((name)=> name.city.indexOf(',')>0?name.city.substring(0,name.city.indexOf(',')):name.city ) )
       props.setResult(Array.from(citys));
       
       let tmp=[];
       Array.from(citys).map((obj,i)=>{
        
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj}&APPID=3a179819ba24328a567616d754ecf94a&units=metric`)
        .then(response=>response.json())
        .then(data=>{
            tmp=tmp.concat(data);
            //as the final result is inacessible outside the fnctin we are just just returnig the updated string after every iteration
            props.setResult(tmp);
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
        <img src="https://www.kindpng.com/picc/m/14-143106_weather-free-stock-photo-cloudy-clip-art-hd.png" height='60em' className="align-text-center" />  
        Weather Man
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        {/* <li className="nav-item">
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
        </li> */}
      </ul>

      <div className="mt-n4" style={{height:"2px", transform: "rotate(40deg) scale(1.4) translate(0.3em,-0.2rem)", fontWeight:"bolder"}}><strong>/</strong></div>
      <form className="d-flex" role="search">
        <input className=" srchbar form-control me-2" type="text" style={{borderRadius:"50px", borderColor:"orange", borderWidth:"0.2em"}} placeholder="Search" value={stxt} aria-label="Search" onChange={setStext}/>

        <Link to='/search'><button className="btn btn-outline-success d-none" type="submit" onClick={serch}>Search</button></Link>
       
      </form>
    </div>
  </div>
</nav>
);

}

export default Navbar;