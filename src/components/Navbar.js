//import React, { useState } from 'react';
import cloud from "../images/cloudy.png";
import logo from "../images/logo.png";

import {Link} from 'react-router-dom';
import { useState } from "react";
const Navbar=()=>{

const [stxt,altxt]=useState('');
//const [result,props.setResult]=useState([]);
const setStext=(e)=>{
  //props.setSearchTxt(e.target.value);
//  stxt=stxt+e.target.value;
altxt(e.target.value);
}

// const serch =(e)=>{
//   props.setSearchTxt(stxt);
//   let citys;
//   temp=stxt;  let is a let variable
//   altxt('');
//   fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${temp}`, options)
//     .then(response => response.json())
//     .then(data=>{


//       //we are mapping a list of the city names, converting it into set and reconverting it to an array to eliminate evevry duplicate occurance
//        citys=new Set(data.data.map((name)=> name.city.indexOf(',')>0?name.city.substring(0,name.city.indexOf(',')):name.city ) )
//        props.setResult(Array.from(citys));
       
//        let tmp=[];
//        Array.from(citys).map((obj,i)=>{
        
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj}&APPID=8d75ba2662e64120c2ce4ff25674a3ee&units=metric`)
//         .then(response=>response.json())
//         .then(data=>{
//             tmp=tmp.concat(data);
//             //as the final result is inacessible outside the fnctin we are just just returnig the updated string after every iteration
//             props.setResult(tmp);
//             console.log(tmp);
            
//         }).then( tmp=[])
        
        
//     }
//      )
//   }
//    )}

  ///aaaahhhh so made a list of similar searches gotta map them out in the search view 
//dont eleminate te below comment we are finding the list fo cities.. now we have to search weather of each city
  
  

  
return(

<nav className="navbar navbar-expand-lg sticky-top   shadow" style={{backgroundColor:"rgba(153, 204, 255,0.5)", backdropFilter: "blur(5px)"}}>
  <div className="container-fluid" >
    
    <Link className="navbar-brand"  to="/" style={{padding:"0",fontFamily:'establo', fontSize:"255%", color:"rgba(14,50,255,0.86)"}}>
        {/* <img src={cloud} height='60em' className="align-text-center" />   */}
        <img src={logo} height='60em' className="align-text-center" style={{filter: "invert(100%)"}}/>  

        Weather Man
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       {/*git <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>  
          Home
          </Link>
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
        </li> */}
      </ul>
       <div className="d-flex flex-row"> 
      <div className="mt-n4" style={{height:"2px", transform: "rotate(40deg) scale(1.4) translate(1em,0.4rem)", fontWeight:"bolder"}}><strong>/</strong></div>
      <form className="d-flex" role="search">
        <input className=" srchbar form-control me-2" type="text" style={{borderRadius:"50px", borderColor:"orange", borderWidth:"0.2em"}} placeholder="Search" value={stxt} aria-label="Search" onChange={setStext}/>
        <Link to={`/search/${stxt}`}><button className="srch btn btn-success" type="submit" >Search</button></Link>

      </form>
      </div>

    </div>
  </div>
</nav>
);

}
//{/*onClick={serch}*/...}

export default Navbar;