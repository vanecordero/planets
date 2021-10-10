import React, { useState, useEffect } from "react";
import Image from "../../components/image/images";
import AllDataPLanets from '../../services/AllDataPLanets';
import style from './home.module.css';
import { Link } from "wouter";

export default function Home(){

    const [planetas, setDataPLanet] = useState([])
useEffect(()=>{
    const getDTA = AllDataPLanets()
    console.log(getDTA)
    setDataPLanet(getDTA)
  
    // setUrl(getDTA['images']['planet'])
    // setContent(getDTA['overview'])
},[])

    return(
        <div className={style.galaxy}>        
        <Image
            className={style.galaxy_sun}
            url='/assets/img/sun.svg'
          />
          <div className={style.galaxy_planets}>
          {
                planetas.map(planeta=>{
                return <Link
                to={"/"+planeta.name}
                key={planeta.name}>
                    <span>
                        <Image                        
                            className=''
                            url={planeta.images.planet}
                            //{urls}
                            descrip={planeta.name}
                            //{'planeta '+data['name']}
                        />
                    </span>
                </Link>
                })
            }
          </div>            
        </div>
    )
}