import { useEffect, useState } from 'react';
import Hero from './Hero'
import ima from "../images/sadsun.png";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Beforeunload } from 'react-beforeunload';
const SearchView=(props)=>{
    const [result,setResult]=useState([]);
    let tmp=[];
    //const [txt,seTxt]=useState("");
    let txt,temp;
    let beforesrch=true;
    const {src}=useParams();
console.log(src);





const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '108543c74cmshb36998e0a928688p194c23jsnc2c86a58c18c',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };  //srch
  useEffect(()=>{
    
    let citys;
    temp=src;
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${src}`, options)
      .then(response => response.json())
      .then(data=>{
  
        
        //we are mapping a list of the city names, converting it into set and reconverting it to an array to eliminate evevry duplicate occurance
         citys=new Set(data.data.map((name)=> name.city.indexOf(',')>0?(name.city.substring(0,name.city.indexOf(',')).indexOf(src)>=0?name.city.substring(0,name.city.indexOf(',')):null):name.city ) )
         //setResult(Array.from(citys));
         console.log(result);
         let tmp=[];
         setResult(tmp);
         Array.from(citys).map((obj,i)=>{
          
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj}&APPID=8d75ba2662e64120c2ce4ff25674a3ee&units=metric`)
          .then(response=>response.json())
          .then(data=>{
              tmp=tmp.concat(data);
              //as the final result is inacessible outside the fnctin we are just just returnig the updated string after every iteration
              setResult(tmp);
              console.log(result);
              
          })
          
          ///ko is a problem where there are citys but no weather reports
      }
       )
    }
     ).catch(error=>{beforesrch=false;setResult([]); console.log('inside catch')})
  
    ///aaaahhhh so made a list of similar searches gotta map them out in the search view 
  //dont eleminate te below comment we are finding the list fo cities.. now we have to search weather of each city
    
    
  
    }, [src])


        

    let imgurl;
    txt=`Search Results for ${src}`;
    //txt=`Search Results for ${props.srch}`
    let num=0;
    
   // const temp=Array.from(props.res)

    

    let returnHTML=result.map((obj,i)=>{
        
        if(obj.name){
            num++;
        switch(obj.weather[0].main) {
            case "Rain":
              imgurl="https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?b=1&k=20&m=1257951336&s=170667a&w=0&h=N_dkdVEznSiN43vNpVzjnnk8xUi4lg1IFK19JXxo5Zg=";
              break;
            case "Clouds":
                imgurl="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/07/23/Pictures/rain-delhi_745e4f02-8e45-11e8-a4ad-b76a55df4e8b.jpg";
                break;
            case "Haze":
              imgurl="https://media.wired.co.uk/photos/606dba04751ea43ccd9898b5/16:9/w_2560%2Cc_limit/london-heatwave.jpg"
              break;
            case "Clear":
                imgurl="https://i1.wp.com/seojames.com/wp-content/uploads/2017/10/Clear-Skies-Ahead.jpg?fit=1920%2C1281&ssl=1";
            break;
            case "Mist":
              imgurl="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg"
              break;
            case "Thunderstorm":
                imgurl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lightning-storm-over-colorado-royalty-free-image-535207585-1561414905.jpg?crop=1.00xw:0.890xh;0,0.0491xh&resize=1200:*";
                break;
            case "Drizzle":
                imgurl="https://wallpapercave.com/wp/wp8260552.jpg";
                break;
            default:
                imgurl="https://www.kindpng.com/picc/m/14-143106_weather-free-stock-photo-cloudy-clip-art-hd.png";
            
        }
        //dict[num]=obj;
    
    
    };

    

    console.log(obj);
    if(obj.name)
    {return <div key={i}> 
    <Link to={`../search/city/${obj.name}`}  style={{color:"black", textDecoration:"none"}} >
    <div className="disp card m-4  shadow-lg col-3" >
        <img src={imgurl} className="card-img-top p-2 rounded-5" style={{height:"10em", objectFit:"cover"}} alt="..."/>
        
        <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
                <div className="card-title" ><b>{obj.name}</b></div>
                <img className="p-3" src={`https://openweathermap.org/images/flags/${obj.sys.country.toLowerCase()}.png`} style={{objectFit:'none ', transform:'scale(1.5)'}}/>
            </div>
            <p>{obj.weather[0].description}</p>
            <div className="temps my-4 container d-flex justify-content-evenly" >
                
                <div className='temp'>
                    <div className="d-flex justify-content-around">
                        <p style={{paddingTop: `${9*(100-obj.main.temp)/100}rem` }} >{obj.main.temp}</p>
                        <div className="progress d-inline-block border border-danger" style={{height: '10rem', width:"0.5rem"}}>
                            <div className="empty" role="progressbar" style={{height: `${100-obj.main.temp}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar bg-danger " role="progressbar" style={{height: `${obj.main.temp}%`, width:'100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <p>Temp ℃</p>
                </div>

                <div className='max-temp'>
                    
                    <div className="d-flex ">
                        <p style={{paddingTop: `${9*(99-obj.main.feels_like)/100}rem` }} >{obj.main.feels_like}</p>
                        <div className="progress d-inline-block border border-danger" style={{height: '10rem', width:"0.5rem"}}>
                          <div className="empty  " role="progressbar" style={{height: `${100-obj.main.feels_like}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          <div className="progress-bar bg-danger " role="progressbar" style={{height: `${obj.main.feels_like}%`, width:"100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <p>Feels like</p>
                </div>
            </div>
            <p className="cardtext m-1">Humidity:</p>
            <div className="progress " style={{height: 'auto'}}>
                <div className="progress-bar" role="progressbar" style={{width: `${obj.main.humidity}%`}} aria-valuenow={obj.main.humidity} aria-valuemin="0" aria-valuemax="100">{obj.main.humidity}%</div>
            </div>

            <p className="card-text">Temp:{obj.main.temp}</p>
        </div>
</div></Link>
</div>}

else
return null; 



}
)
returnHTML= returnHTML.filter(function(value){ 
    return value != null;})
    console.log(returnHTML);
if(!(returnHTML.length)){
    returnHTML=<div className="d-flex flex-column "><h1 className="m-5 p-5 text-light rounded-5 border">Sorry Pal... I dont know such city :(</h1> <img src={ima} className="sadsun"/> </div>
}
console.log(returnHTML+""+beforesrch)


return(
    
  

        <div className="py-5 d-flex justify-content-center" style={{  backgroundImage: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"100%", backgroundAttachment:'fixed' }}>
            {/* <Hero txt={txt} /> */}
            
        
            <div className="container-xl d-flex flex-row justify-content-center mx-5 " style={{flexWrap:'wrap', height:"fit-content"}} >
            {/* {(returnHTML.length==0&&beforesrch)?<div>loading</div>:returnHTML}a */}
            {returnHTML}
            </div>
        </div>
    

);
}
export default SearchView;