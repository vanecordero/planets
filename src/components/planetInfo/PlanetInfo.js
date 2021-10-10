import React, { useState, useEffect } from 'react';
import contentPlanet from '../../services/contentPlanet'
import Button from '../buttons/buttonInfo';
import { ImgStyled } from '../image/images.style';
import style from './PlanetInfo.module.css'

export default function PlanetInfo({id}){
const getDTA = contentPlanet({elem:id})
const [load, setloading] = useState(true)
const [data, setDataPLanet] = useState([getDTA])
const [content, setContent] =useState([getDTA['overview']])
const [urls, setUrl] = useState([''])
const [afte, setAfter] =useState([''])
const [type, setType]= useState('overview')

useEffect(()=>{
    const getDT = contentPlanet({elem:id})
    setDataPLanet(getDT)    
    setUrl(getDT['images']['planet'])
    setContent(getDT['overview'])
    myFunction()
},[id])
console.log(type)

function myFunction() {
    setTimeout(function(){ setloading(false) }, 3000)}
const handleClick = (e, id, type, content)=>{
    e.preventDefault()
    setContent(data[id])
    setUrl(data['images'][type])
    setAfter(content)
    setType(id)
}

return(
    <div className={style.general}>
        <div>
             <div className={style.data_button_movile}>
            <Button
                value="overview" 
                onClick={(e=> handleClick(e, 'overview', 'planet',''))}
                className={type==="overview"? style.active_mobile: null}
                />
                <Button
                value="structure" 
                onClick={(e=> handleClick(e, 'structure', 'internal',''))}
                className={type==="structure"? style.active_mobile: null}
                />
                <Button
                value="geology" 
                onClick={(e=> handleClick(e, 'geology', 'planet', data['images']['geology']))}
                className={type==="geology"? style.active_mobile: null}
                />
           </div>
        {
            load
            ?
            <img alt='loading' className={style.loading} src='./assets/img/shootingStar.gif'/>
            :
            <ImgStyled
                urlAft={afte}  
                url={urls}
                aft={afte}
                descrip={'planeta '+data['name']}
            /> 
        }
        </div>
        <div>        
            <div  className={style.data_text}>
                <h1>{data['name']}</h1>
                <p>{content['content']}</p>
                <p className={style.data_link}>Source: <a href={content['source']} rel="noreferrer" target='_blank'
                
                >Wikipedia</a><span> &#8618;</span></p>
            </div>
            
           <div className={style.data_button}>
            <Button
                value="overview" 
                onClick={(e=> handleClick(e, 'overview', 'planet',''))}
                className={type==="overview"? style.activeLink: null}
                />
                <Button
                value="structure" 
                onClick={(e=> handleClick(e, 'structure', 'internal',''))}
                className={type==="structure"? style.activeLink: null}
                />
                <Button
                value="geology" 
                onClick={(e=> handleClick(e, 'geology', 'planet', data['images']['geology']))}
                className={type==="geology"? style.activeLink: null}
                />
           </div>
        </div>

    </div>
)

}