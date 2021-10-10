import React from 'react'
import PlanetInfo from "../../components/planetInfo/PlanetInfo";
import FooterData from "../../components/footerData/footerData";

export default function Saturn() {
    return (
        <>
            <PlanetInfo
            id={5}
            />
            <FooterData
                elem={5}
            />
        </>
    )
}
