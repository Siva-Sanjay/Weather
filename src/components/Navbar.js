//import React, { useState } from 'react';
import cloud from "../images/cloudy.png";
import logo from "../images/logo.png";

import {Link} from 'react-router-dom';
import { useState, useEffect, useMemo } from "react";
const Navbar=()=>{

const [stxt,altxt]=useState('');
//const [result,props.setResult]=useState([]);
const setStext=(e)=>{
altxt(e.target.value);
}

const [lat, setLat] = useState(0);
const [long, setLong] = useState(0);

  const [localtemp,setLocaltemp]=useState(0);
  const [localdesc,setLocaldesc]=useState("00");
  const [currentloc,setCurrentloc]=useState("");
  const [info,setinfo]=useState({"coord":{"lon":83.22,"lat":17.69},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":32.01,"feels_like":39.01,"temp_min":32.01,"temp_max":32.01,"pressure":1001,"humidity":79,"sea_level":1001,"grnd_level":998},"visibility":5000,"wind":{"speed":5.14,"deg":220},"clouds":{"all":75},"dt":1720081650,"sys":{"type":1,"id":9255,"country":"IN","sunrise":1720050998,"sunset":1720098366},"timezone":19800,"id":1253102,"name":"India","cod":200});


  ///aaaahhhh so made a list of similar searches gotta map them out in the search view 
//dont eleminate te below comment we are finding the list fo cities.. now we have to search weather of each city
  
  



useEffect(()=>{
    const geolocationAPI = navigator.geolocation; 
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          // setLat(coords.latitude);
          // setLong(coords.longitude);
         // codeLatLng(coords.latitude, coords.longitude)
         console.log(lat+"ooo "+long);
        if(coords.latitude || coords.longitude)
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=3a179819ba24328a567616d754ecf94a&units=metric`)
         .then(response=>response.json())
         .then(data=>{
           setinfo(data);
           console.log(data);
           setLocaltemp(data.main.temp);
           setLocaldesc(data.weather[0].description);
           setCurrentloc(data.name)
           
         })



        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
    

    
 console.log("entered fetch");
    
  },[]);

  console.log(info.weather.description);


  //the nav bar has all the things arranged, bow try to equally distribute them, justify align flex doenst work

return(

<nav className="navbar navbar-expand-lg sticky-top   shadow" style={{backgroundColor:"rgba(153, 204, 255,0.5)", backdropFilter: "blur(5px)"}}>
  <div className="container-fluid justify-content-equal" >
    <Link className="navbar-text d-flex flex-row justify-content-start" style={{flex:"1", textDecoration:"none"}}  to={`/search/city/${currentloc}`} >
    <div className="my-auto mx-2 align-self-start" style={{fontSize:"200%"}}>{Math.round(localtemp)}℃</div>
      <div className="d-flex flex-column">
           <div><b>{info.name}</b><img className="px-2" src={`https://openweathermap.org/images/flags/${info.sys.country.toLowerCase()}.png`} style={{objectFit:'none ', transform:'scale(1)'}}/> </div> 
          <div>{info.weather[0].description}</div>
      </div>
    </Link>

    
    <Link className="navbar-brand d-flex justify-content-center"  to="/" style={{flex:"1",padding:"0",fontFamily:'establo', fontSize:"255%", color:"rgba(14,50,255,0.86)"}}>
        {/* <img src={cloud} height='60em' className="align-text-center" />   */}
        <div className="d-inline d-flex">
        <img src={logo} height='60em' className="align-text-center" style={{filter: "invert(100%)"}}/>  
          Weather Man
        </div>
    </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" style={{flex:"1"}}> 
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