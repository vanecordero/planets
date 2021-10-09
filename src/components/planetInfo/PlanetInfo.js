import React, { useState, useEffect } from 'react';
import contentPlanet from '../../services/contentPlanet'
import Button from '../buttons/buttonInfo';


export default function PlanetInfo({id}){
const [data, setDataPLanet] = useState([])
const [content, setContent] =useState([])

useEffect(()=>{
    const getDTA = contentPlanet({elem:id})
    setDataPLanet(getDTA)
    setContent(getDTA['overview'])
},[])

const handleClick = (e, id)=>{
    e.preventDefault()
    setContent(data[id])
}
return(
    <div>
        <p>{content['content']}</p>
        
        <Button
           value="overview" 
           onClick={(e=> handleClick(e, 'overview'))}
        />
        <Button
           value="structure" 
           onClick={(e=> handleClick(e, 'structure'))}
        />
        <Button
           value="geology" 
           onClick={(e=> handleClick(e, 'geology'))}
        />

    </div>
)

}