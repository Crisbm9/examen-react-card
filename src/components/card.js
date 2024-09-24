import React from "react";
import './card.css'
import { GatsbyImage } from 'gatsby-plugin-image';

const Card=({imagen, piefoto, titulo, descripcion})=>{
return(
  <>
  <div className="card">
    <h2>{titulo}</h2>
    <figure>
      <GatsbyImage image={imagen} alt={piefoto} />
    </figure>
    <p>{descripcion}</p>
    <button>+info</button>
  </div>
  </>
)
}
export default Card