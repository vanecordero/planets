import React from 'react'
import PlanetInfo from "../../components/planetInfo/PlanetInfo";
import FooterData from "../../components/footerData/footerData";


export default function Earth() {
    return (
        <>
        <PlanetInfo
            id={2}
        />
        <FooterData
            elem={2}
        />
        </>
    )
}
