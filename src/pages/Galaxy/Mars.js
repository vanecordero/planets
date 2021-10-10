import React from 'react'
import PlanetInfo from "../../components/planetInfo/PlanetInfo";
import FooterData from "../../components/footerData/footerData";

export default function Mars() {
    return (
        <>
            <PlanetInfo
            id={3}
            />
            <FooterData
                elem={3}
            />
        </>
    )
}
