
import ima from '../images/sadsun.png'
import { useEffect, useState } from 'react';
import delhi from '../images/delhi.jpg';
import kolkata from '../images/kolkata.jpg';
import mumbai from '../images/mumbai.jpg';
import hyderabad from '../images/hyderabad.jpg';
import Navbar from './Navbar';
const Home=()=>{


    const [kol,setKol]=useState();
    const [hyd,setHyd]=useState();
    const[del,setDel]=useState();
    const[mumb,setMumb]=useState();
    useEffect(()=>{        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&APPID=8d75ba2662e64120c2ce4ff25674a3ee&units=metric`)

          .then(response=>response.json())
          .then(data=>{
            setKol(data);
            console.log("kkt");
        })
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&APPID=8d75ba2662e64120c2ce4ff25674a3ee&units=metric`)
          .then(response=>response.json())
          .then(data=>{
            setDel(data);
            console.log("del");
        })
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&APPID=8d75ba2662e64120c2ce4ff25674a3ee&units=metric`)
          .then(response=>response.json())
          .then(data=>{
            setHyd(data);console.log("hyd");
        })
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=8d75ba2662e64120c2ce4ff25674a3ee&units=metric`)
          .then(response=>response.json())
          .then(data=>{
            setMumb(data);console.log("mum");
        })
    },[]);
//        <div className="py-5 d-flex justify-content-center" style={{  backgroundImage: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100%", backgroundAttachment:'fixed' }}>

if(mumb && del && hyd && kol)
return(
<>
    
    <div className="d-flex flex-column justify-content-toop m-auto" style={{ backgroundImage: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh", backgroundAttachment:'fixed' }} >
    <Navbar />
        <h1 className="text-center my-3 hello" > <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span>  <span>T</span><span>h</span><span>e</span><span>r</span><span>e</span><span>..!</span> </h1>
        <h5 className="text-center my-4"> This is your weather man. Search for your city to get the weather details there</h5>

        <div className="d-flex justify-content-center">
                <ul className="cardholder row g-0 container ">

                    <li className="card metro-card shadow-lg delhi d-flex flex-row align-items-center col-md-6 col-lg-5 col-sm-10 mx-3 my-2">
                                <img src={delhi} className=" col-4 citimg" alt="..." />
                            <div className="col-8">
                                <div className="card-body">
                                    <h3 className="card-title">New Delhi</h3>
                                    <p className="card-text">{del.weather[0].description}<br/>{del.main.temp}°C</p>
                                    <a href="/search/city/New%20Delhi" className="btn btn-primary">More Details</a>
                                </div>
                            </div>
                    </li>
                    
                    <li className="card metro-card shadow-lg Mumbai d-flex flex-row align-items-center col-md-6 col-lg-5 col-sm-10 mx-3 my-2">
                    <img src={mumbai} className=" col-4 citimg " alt="..." />
                    <div  className="col-8">
                            <div className="card-body">
                                <h3 className="card-title">Mumbai</h3>
                                <p className="card-text">{mumb.weather[0].description}<br/>{mumb.main.temp}°C</p>
                                <a href="/search/city/mumbai" className="btn btn-primary">More Details</a>
                            </div>
                    </div>    
                    </li>

                    <li className="card metro-card shadow-lg Kolkata  d-flex flex-row align-items-center col-md-6 col-lg-5 col-sm-10 mx-3 my-2" >
                    <img src={kolkata} className=" col-4 citimg" alt="..." />
                    <div className="col-8">
                           <div className="card-body">
                                <h3 className="card-title">Kolkata</h3>
                                <p className="card-text">{kol.weather[0].description}<br/>{kol.main.temp}°C</p>
                                <a href="/search/city/kolkata" className="btn btn-primary">More Details</a>
                            </div>
                     </div>                    
                     </li>

                    <li className="card metro-card shadow-lg Hyderabad d-flex flex-row align-items-center col-md-6 col-lg-5 col-sm-10 mx-3 my-2" >
                            <img src={hyderabad} className=" col-4 citimg" alt="..." />
                            <div className="col-8">
                                <div className="card-body">
                                    <h3 className="card-title">Hyderabd</h3>
                                    <p className="card-text">{hyd.weather[0].description}<br/>{hyd.main.temp}°C</p>
                                    <a href="/search/city/Hyderabad" className="btn btn-primary">More Details</a>
                                </div>
                            </div>
                    </li>


                </ul>
            </div>




    </div>
</>
);
else 
    return(
        <div className="d-flex  justify-content-center" style={{ backgroundImage: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh", backgroundAttachment:'fixed' }} >
            <div className="d-flex flex-column  "><h1 className="m-5 p-5 text-light rounded-5 border"> Oops some issue with connection </h1> <img src={ima} className="sadsun"/> </div>
</div>)

}
export default Home;