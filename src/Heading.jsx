import React from "react";

function Heading ()
{

var name = "Mainak";
const customStyle={
  color :""
}

const date =new Date();
const currentTime=date.getHours();

let greeting;

if(currentTime < 12){
greeting="Good Morning"
customStyle.color= "red"
}
else if(currentTime < 18){
greeting="Good Afternoon"
customStyle.color= "black"
}
else {
greeting="Good Night"
customStyle.color= "orange"
}

return <h1 className="header" style={customStyle}> Hello {name} {greeting} </h1>
}

export default Heading;