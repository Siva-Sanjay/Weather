import { useState } from 'react';
import Hero from './Hero'
const SearchView=(props)=>{
    let tmp=[];
    //const [txt,seTxt]=useState("");
    let txt;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '108543c74cmshb36998e0a928688p194c23jsnc2c86a58c18c',
    //         'X-RapidAPI-Host': 'poke-info-api.p.rapidapi.com'
    //     }
    // };
    
    // fetch(`https://poke-info-api.p.rapidapi.com/pokemons?name=${props.srch}`, options)
    //     .then(response => response.json())
    //     .then(data=>{console.log(data)});

// if(props.srch){
    
//     const returnHTML= props.res.map((obj,i)=>{
//         let city;
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj}&APPID=3a179819ba24328a567616d754ecf94a`)
//         .then(response=>response.json())
//         .then(data=>{
//             tmp=tmp.concat(data);
//             //console.log(data);
//         })
        
//     }
//      )
//      console.log(tmp);

// }


        

    let imgurl;
    txt=`Search Results for ${props.srch}`;
    
    const returnHTML=props.res.map((obj,i)=>{
    
        
        if(obj.name)
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
            default:
                imgurl="https://www.kindpng.com/picc/m/14-143106_weather-free-stock-photo-cloudy-clip-art-hd.png";
        };



    if(obj.name.length()>0)
    {return <div key={i}> 
    <div className="disp card m-4  shadow-lg" >
        <img src={imgurl} className="card-img-top p-2 rounded-5" style={{height:"10em", objectFit:"cover"}} alt="..."/>
        
        <div className="card-body">
            <div className="card-title" ><b>{obj.name}</b></div>
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
</div>
</div>}

else
return <div>yo nothing</div> 
})

return(
    <div style={{backgroundImage:"url(https://cdn.wallpapersafari.com/29/95/msYru0.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"400vh"}}>
        <Hero txt={txt} />
        
       
        <div className="container d-flex flex-row justify-content-center " >
        {returnHTML}
        </div>
    </div>


);
}
export default SearchView;