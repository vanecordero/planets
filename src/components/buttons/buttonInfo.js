import React from "react";

const Button = ({value, onClick, className}) =>(
   <button
    onClick={(event=> onClick(event))}
   className={className}
   >
       {value}
   </button> 
)

export default Button