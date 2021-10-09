import React, { useState, useEffect } from 'react';
import AllDataPLanets from '../../services/AllDataPLanets';
import Card from '../card/card'

export default function FooterData({elem}){
const [footerInfo, setfooterInfo] = useState(AllDataPLanets({id:elem}))

  useEffect(()=>{
      setfooterInfo(AllDataPLanets({id:elem}))
 },[])

return(
    <div>        
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