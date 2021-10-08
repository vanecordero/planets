import AllDataPLanets from '../../services/AllDataPLanets';
import React, { useState, useEffect } from 'react';

export default function Menu(){
    // const ELEM = 'Mercury'
   const [planetas, setPlanetData] = useState([])
  
   useEffect(function(){
    setPlanetData(AllDataPLanets())
   },[])
  
   return (
     <>
       {
         planetas.map(planeta=>{
          return <a href="#" key={planeta.name}> {planeta['name']}</a>
         })
       }
     </>
   )



   }