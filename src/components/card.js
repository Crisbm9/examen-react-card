import React from "react";
import './card.css'
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from "gatsby";

const Card=({imagen, piefoto, titulo, descripcion, link})=>{
return(
  <>
  <div className="card">
    <h2>{titulo}</h2>
    <figure>
      <GatsbyImage image={imagen} alt={piefoto} />
    </figure>
    <p>{descripcion}</p>
    <div className="button">
    <Link className="link" to={link}>+ Info</Link>
  </div></div>
  </>
)
}
export default Card