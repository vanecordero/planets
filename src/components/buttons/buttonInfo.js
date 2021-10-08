import React from "react";

const Button = ({value, onClick}) =>(
   <button
    onClick={(event=> onClick(event))}
   >
       {value}
   </button> 
)

export default Button