import AllDataPLanets from '../../services/AllDataPLanets';
import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'wouter'
import style from './menu.module.css'

export default function Menu(){
   const [planetas, setPlanetData] = useState([])
   const divRef = useRef(null);

   useEffect(function(){
    setPlanetData(AllDataPLanets())
   },[])

   const removeClass = ()=>{
     divRef.current.classList.remove("show");  
   }


   return (
       <nav className={`navbar navbar-expand-lg navbar-dark ${style.menu}`}>
  <div className="container-fluid">
    <Link to="/planets">
      <h3 className={style.menu_title}>the planets</h3>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toogleNav" aria-controls="toogleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="toogleNav" ref={divRef}>
      <div className="navbar-nav">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${style.menu_options}`}>
      {
        planetas.map((planeta)=>{
          return <li key={planeta.name}> 
          <Link             
            to={'/'+planeta.name}onClick={removeClass}>              
              <span >{planeta['name']}</span>
          </Link></li>
        })
      }
      </ul>
      </div>
    </div>
  </div>
</nav>  
   )



   }