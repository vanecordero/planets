import planetsData from '../services/PlanetsData';
import React, { useState, useEffect } from 'react';

export default function Menu(){
    // const ELEM = 'Mercury'
   const [planetas, setPlanetData] = useState([])
  
   useEffect(function(){
      setPlanetData(planetsData())
   },[])
 
   return (
     <>
       {
         planetas.map(planeta=>{
             console.log(planeta)
          return <a href="#"> {planeta['name']}</a>
         })
       }
     </>
   )



   }