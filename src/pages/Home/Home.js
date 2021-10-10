import React, { useState, useEffect } from "react";
import Image from "../../components/image/images";
import AllDataPLanets from '../../services/AllDataPLanets';
import style from './home.module.css';
import { Link } from "wouter";
import sun from '../../assets/img/sun.svg'

export default function Home(){

    const [planetas, setDataPLanet] = useState([])
useEffect(()=>{
    const getDTA = AllDataPLanets()
    setDataPLanet(getDTA)
},[])

    return(
        <div className={style.galaxy}>        
        <Image
            className={style.galaxy_sun}
            url={sun}
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
                            descrip={planeta.name}
                        />
                    </span>
                </Link>
                })
            }
          </div>            
        </div>
    )
}