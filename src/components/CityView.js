import React, { useEffect,useMemo, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import pressure from '../images/pressure.png';
import wind from '../images/wind.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import ima from '../images/sadsun.png';

import Navbar from './Navbar';

let dict={"Rain":"", "Clouds":"", "Haze":"","Clear":"","Mist":"","Thunderstorm":"","Drizzle":""}

const CityView=()=>{
    const months=["January",'February','March',"April","May","June","July","August","September","October","November","December"];
    const day=["Sunday",'Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let {id} = useParams();
    let imgurl="";
    const date=new Date();
    const nav=useNavigate();
    const RedirectPage = () => {
        useEffect(() => {
          nav('../search');
        }, [])
      }
     //const [dat,setDat]=useState(null);    
     const [innerHTML,setHTM]=useState(
        // <div className="py-5 d-flex justify-content-center" style={{  backgroundImage: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100%", backgroundAttachment:'fixed' }}>
        <div className="d-flex flex-column m-auto " style={{ color:'white',  backgroundImage: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh", backgroundAttachment:'fixed' }}>
                <Navbar />
     <div className="d-flex flex-column m-auto"><h1 className="m-5 p-5 text-light rounded-5 border">Sorry Pal... Somethings gone wrong :(</h1> <img src={ima} className="sadsun"/> </div>
</div>
    );

 //api key 8d75ba2662e64120c2ce4ff25674a3ee
    

useMemo(()=>{ 

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=3a179819ba24328a567616d754ecf94a&units=metric`)
     .then(response=>response.json())
     .then(data=>{
         const dat=data;
         const srtime=new Date((data.sys.sunrise+data.timezone)*1000);
         const sstime=new Date((data.sys.sunset+data.timezone)*1000);
         const date=new Date((data.dt+data.timezone)*1000);
         console.log(date.getUTCHours()+":"+date.getUTCMinutes())
         console.log(data.dt+data.timezone);
         console.log("rendered");
         if(dat){
            
            switch(dat.weather[0].main) {
                case "Rain":
                  imgurl="https://basmilius.github.io/weather-icons/production/fill/all/rain.svg";
                  break;
                case "Clouds":
                    imgurl="https://basmilius.github.io/weather-icons/production/fill/all/cloudy.svg";
                    break;
                case "Haze":
                  imgurl="https://basmilius.github.io/weather-icons/production/fill/all/haze.svg"
                  break;
                case "Clear":
                    imgurl="https://basmilius.github.io/weather-icons/production/fill/all/clear-day.svg";
                break;
                case "Mist":
                  imgurl="https://basmilius.github.io/weather-icons/production/fill/all/mist.svg"
                  break;
                case "Thunderstorm":
                    imgurl="https://basmilius.github.io/weather-icons/production/fill/all/thunderstorms-rain.svg";
                    break;
                case "Drizzle":
                    imgurl="https://basmilius.github.io/weather-icons/production/fill/all/drizzle.svg";
                    break;
                case "Snow":
                    imgurl="https://basmilius.github.io/weather-icons/production/fill/all/snow.svg"
                default:
                    imgurl="https://www.kindpng.com/picc/m/14-143106_weather-free-stock-photo-cloudy-clip-art-hd.png";
                
            }




            setHTM( 
            // <div className="py-5 d-flex flex-column justify-content-center" style={{ color:'white' ,backgroundImage: `linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100vh", backgroundAttachment:'fixed' }}>
                <div className="d-flex flex-column m-auto" style={{ color:'white',  backgroundImage: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh", backgroundAttachment:'fixed' }}>
                <Navbar />
                {/* </div><div className="container m-0" style={{backgroundImage: "linear-gradient(180deg, rgba(0,0,0, 0.4), rgba(0,0,0, 1)),url('https://wallpaperaccess.com/full/1540031.jpg')", height:'200vh' , backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundAttachment:'fixed' }}> */}
            
            <div className="container">
            <div className="city-panel d-flex justify-content-between header container">
            {/* <Link to={``}  style={{color:"white", textDecoration:"none"}}> */}
                <div className="city-name circle p-4">
                     <a href={`https://www.google.com/maps/place/${dat.name}`} style={{color:"white", textDecoration:"none", fontSize:"95%", padding:"auto"}} target="_blank">
                    {dat.name}
                     </a> 
                    </div>
              <div className="d-flex" style={{justifyContent: "center"}}>
              <img src={imgurl} className="weathericon"  alt={dat.weather[0].name} style={{transform:"scale(1.2)",     filter: "drop-shadow(1px 1px 2px rgb(0 0 0 / 0.4))"}}/>
              </div>
                <div className="date circle" style={{fontSize:"2em"}}>
                    <span><b>{date.getUTCDate() } {months[date.getUTCMonth()]} {date.getFullYear()}</b></span><br/>
                    <span>{day[date.getDay()]}</span>
                </div>
           </div>
           <br/>
                <div className='desc text-center ' style={{fontSize:"1.5em" ,fontFamily:"cursive", fontSize:"2.5em", textTransform:"capitalize"}}>{dat.weather[0].description}</div>
                <div className="d-flex flex-row justify-content-center my-2">
                    <div className='temp text-center mx-5'>
                        <span className='val fw-bold' style={{fontSize:"2em"}}>{dat.main.temp} ℃</span><br/>
                        <span className='name'>Temperature</span>
                    </div>
                    <div className="Wind text-center mx-5">
                        <span className='val fw-bold' style={{fontSize:"2em"}}>{dat.main.humidity}%</span><br/>
                        <span className='name'>Humidity</span>
                        
                    </div>
                </div>

            <div className="">
                <ul className="cardholder row">
                    <li className="weathercard  col-lg-4 col-sm-10 m-4 Wind">
                        <img className="icon" src={"https://basmilius.github.io/weather-icons/production/fill/all/wind.svg"} style={{filter:"invert(0.5)", speed:"0.1"}}/>
                        <div className='weathertxt'>
                            <div className='paramtitle'>Wind Speed</div>
                            <div className='paramvalue'>{dat.wind.speed} m/s</div>
                        </div>
                    </li>

                    <li className='weathercard col-lg-4 col-sm-10 m-4 Pressure'>
                        <img className="icon" src={"https://basmilius.github.io/weather-icons/production/fill/all/pressure-low.svg"}/>
                        <div className='weathertxt'>
                            <div className='paramtitle'>Pressure</div>
                            <div className='paramvalue'>{dat.main.pressure} hPa</div>
                        </div>
                    </li>

                    <li className='weathercard col-lg-4  col-sm-10 m-4 SunRise'>
                        <img className="icon" src={"https://basmilius.github.io/weather-icons/production/fill/all/sunrise.svg"}/>
                        <div className='weathertxt'>
                            <div className='paramtitle'>Sunrise</div>
                            <div className='paramvalue'>{srtime.getUTCHours()+":"+(srtime.getUTCMinutes()>9?'':'0')+srtime.getUTCMinutes()+' AM'}</div>
                        </div>
                    </li>

                    <li className='weathercard col-lg-4 col-sm-10 m-4 Sunset'>
                        <img className="icon" src={"https://basmilius.github.io/weather-icons/production/fill/all/sunset.svg"}/>
                        <div className='weathertxt'>
                            <div className='paramtitle'>Sunset</div>
                            <div className='paramvalue'>{(sstime.getUTCHours()-12)+":"+(sstime.getUTCMinutes()>9?'':'0')+sstime.getUTCMinutes()+" PM"}</div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        </div>); console.log('innr effect')}
        else
        {
            RedirectPage();
                
            setHTM(<div>Search For another city</div>);
        }
        }); 

   },[]); //well the useEffect doenst actually change much, this is gonna be rendered only one time anyways
       
    console.log('out');
    
   
return innerHTML;
   
};



export default CityView;