import React, { useState, useEffect } from 'react';
import AllDataPLanets from '../../services/AllDataPLanets';
import Card from '../card/card'
import style from './footerData.module.css'

export default function FooterData({elem}){
const [footerInfo, setfooterInfo] = useState(AllDataPLanets({id:elem}))

  useEffect(()=>{
   setfooterInfo(AllDataPLanets({id:elem}))   
 } ,[elem]) 


return(
    <div className={style.card_container} >        
        <Card
           title="rotation time" 
           data={footerInfo[0]['rotation']}
        />
        <Card
           title="revolution time" 
           data={footerInfo[0]['revolution']}
        />
        <Card
           title="radius" 
           data={footerInfo[0]['radius']}
        />
        <Card
           title="Average temp." 
           data={footerInfo[0]['temperature']}
        />

    </div>
)

}