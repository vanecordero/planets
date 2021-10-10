import React from 'react'
import PlanetInfo from "../../components/planetInfo/PlanetInfo";
import FooterData from "../../components/footerData/footerData";


export default function Jupiter() {
    return (
        <>
            <PlanetInfo
            id={4}
            />
            <FooterData
                elem={4}
            />
        </>
    )
}
