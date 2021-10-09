import React from "react";

const Image = ({url, descrip, after, onClick}) =>(
   <img
    src={url}
    alt={descrip}
    onClick={(event=> onClick(event))}
   />
)

export default Image