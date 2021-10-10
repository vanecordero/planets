import React from "react";


const Image = ({className, url, descrip}) =>(
      <div 
      className={className}>
         <img
         src={url}
         alt={descrip}
         />
         <span></span>
      </div>
)

export default Image

