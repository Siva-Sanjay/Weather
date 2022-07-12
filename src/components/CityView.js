import React from "react";
import { useParams } from "react-router-dom";


const CityView=()=>{
    const months=["January",'February','March',"April","May","June","July","August","September","October","November","December"];
    const day=["Sunday",'Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let {id} = useParams();
    const date=new Date();


    return <div className="container">
        <div className="d-flex flex-row justify-content-between header">
            <div className="date">
                <span><b>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</b></span><br/>
                <span>{day[date.getDay()]}</span>
            </div>
            <div>{id} <img src={`https://openweathermap.org/images/flags/${}.png`}/></div>
        </div>
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>

}

export default CityView;