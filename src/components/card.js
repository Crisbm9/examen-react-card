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
    <div className="button">
    <button>+info</button>
  </div></div>
  </>
)
}
export default Card