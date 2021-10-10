import React from 'react'
import PlanetInfo from "../../components/planetInfo/PlanetInfo";
import FooterData from "../../components/footerData/footerData";

export default function Venus() {
    return (
        <>
            <PlanetInfo
            id={1}
            />
            <FooterData
                elem={1}
            />
        </>
    )
}
