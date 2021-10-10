import styled from "styled-components";
import Image from "./images";

export const ImgStyled = styled(Image)`
display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
span{
    background-image: url(${(props)=> props.urlAft});
    background-size: contain;
    background-repeat:   no-repeat;
    background-position: center center;          
    content : "";
    width: 150px;
    height: 150px;
    position: absolute;
    display: inline-block;
    transform: rotate(200deg);
}
img{
    width:250px;
    height:250px;
}
`;
//
//${(props)=> props.url}

//../../../public/assets/img/geology-mercury.png