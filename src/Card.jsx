import React from "react";
import ReactDOM from "react-dom";

function Card(props){
console.log(props);

  return <div>
  
  <h2>{props.name}</h2>
  <img
    src={props.img}
    alt="avatar_img"
  />
  <p>{props.tel}</p>
  <p>{props.mail}</p>
  </div>

}

export default Card;