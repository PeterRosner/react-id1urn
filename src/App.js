import React from "react";
import "./style.css";

import React from "react";
import "./style.css";

function Product(props) {
  return(<div>
    {props.Name} {props.Id} {props.datePurchased} £{props.price}
  </div>)

}

export default function App() {
  return (
    <div style={{color:"red", fontFamily:"Arial"}}>
        <Product Name="Toaster"  Id="TO1234" datePurchased="5/4/21" price="4.00"/>

    </div>
  );
}
