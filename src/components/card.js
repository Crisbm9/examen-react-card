import React from "react";
import './card.css'
import { GatsbyImage } from 'gatsby-plugin-image';

const Card=()=>{
return(
  <>
  <div className="card">
    <h2>titulo</h2>
    <figure>
      <GatsbyImage image="" />
    </figure>
    <p>descripcion</p>
    <button>boton</button>
  </div>
  </>
)
}
export default Card