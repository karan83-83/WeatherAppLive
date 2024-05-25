import React, { useEffect, useState } from "react";
import weather from "./3d-weather-icon-day-with-rain-free-png.webp"
import './App.css';
    const Tempapp=()=>{
      const [city,setCity]=useState();
      const [search,setSearch]=useState("mumbai");
      const inputEvent=(event)=>{
        setSearch(event.target.value);
      }
      useEffect(()=>{
        const fetchApi= async()=>{
          const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=040f55f0051f19a96f9d68c70866b07a`
          const response=await fetch(url);
          const resJson=await response.json();
          setCity(resJson.main);
        }
        fetchApi();
      },[search])
    
  return(
    <>
       <div className="main_div">
        <div className="box">
         <input type="search" placeholder="Enter the City" onChange={inputEvent} style={{color:"black"}}/>
        
         <br/>
         
         <img src={weather} className="img" />
         {!city?(<p>no data found</p>):(
          <>
          <h1>{city.temp} °C</h1>
         <h3>{search}</h3>
         <h4 className="h4"> Min : {city.temp_min} °C | Max : {city.temp_max} °C</h4>
          </>
         )}
         
        </div>
       </div>
    </>
  )
    }
    export default Tempapp;