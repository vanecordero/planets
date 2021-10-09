import React, { useState, useEffect } from 'react';
import contentPlanet from '../../services/contentPlanet'
import Button from '../buttons/buttonInfo';
import Image from '../image/images';


export default function PlanetInfo({id}){
const [data, setDataPLanet] = useState([])
const [content, setContent] =useState([])
const [urls, setUrl] = useState([])
const [afte, setAfter] =useState([''])
useEffect(()=>{
    const getDTA = contentPlanet({elem:id})
    setDataPLanet(getDTA)
    setUrl(getDTA['images']['planet'])
    setContent(getDTA['overview'])
},[])// eslint-disable-line react-hooks/exhaustive-deps
const handleClick = (e, id, type, content)=>{
    e.preventDefault()
    setContent(data[id])
    setUrl(data['images'][type])
    setAfter(content)
}

return(
    <div>
        <h1>{data['name']}</h1>
        <Image
            url={urls}
            aft={afte}
        />
        <p>{content['content']}</p>
        <p>Source: <a href={content['source']} rel="noreferrer" target='_blank'>Wikipedia</a><span>&#10558;</span></p>
        
        <Button
           value="overview" 
           onClick={(e=> handleClick(e, 'overview', 'planet',''))}
        />
        <Button
           value="structure" 
           onClick={(e=> handleClick(e, 'structure', 'internal',''))}
        />
        <Button
           value="geology" 
           onClick={(e=> handleClick(e, 'geology', 'planet', data['images']['geology']))}
        />

    </div>
)

}