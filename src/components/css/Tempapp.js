import React, { useEffect, useState } from "react";
import "./style.css" ;
const Tempapp=()=>{
   const [city,setCity]=useState();
   const [search,setSearch]=useState("mumbai");
    
   useEffect(()=>{
    const fetchApi = async ()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units-metric&appid=040f55f0051f19a96f9d68c70866b07a`
      const response =await fetch(url);
      // console.log(response);
      const resJson =await response.json();
    
      setCity(resJson.main)

    }
    fetchApi();
   },[search]);

    return(
        <>
         <div className="box">
          <div className="inputData">
            <input type="search"
            className="inputFeild" onChange={(event)=>{
              setSearch(event.target.value);
            }} />
          {!city?(<p>No data Found</p>):(
            <>
            <div className="info">
            <h2 className="location">
          <i className="fas fa-street-view">{search}</i>
            </h2>
            <h1 className="temp">
              {city.temp}
            </h1>
            <h3 className="tempin_max"> Min : {city.temp_min} | Max : {city.temp_max}</h3>
         </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
            </>
          )}

        
         
          </div>
          </div>
        </>
    )
}
export default Tempapp;