import React from "react";
import Keg from "./Keg";

const kegList = [
  {
    name: "Pils",
    brand: "Heater Allen Brewing",
    price: "$7.00",
    alcoholContent: "4.8%",
  },
  {
    name: "HUB Lager",
    brand: "Hopworks Urban Brewery",
    price: "$6.50",
    alcoholContent: "5.1%",
  },
  {
    name: "Pilsner",
    brand: "Breakside Brewing Co.",
    price: "$6.50",
    alcoholContent: "5.3%",
  },
  {
    name: "Session Lager",
    brand: "Full Sail Brewing Co.",
    price: "$6.00",
    alcoholContent: "5.1%",
  },
  {
    name: "Kölsch",
    brand: "Occidental Brewing Co.",
    price: "$6.50",
    alcoholContent: "4.4%",
  },
  {
    name: "Sterling Pils",
    brand: "Ninkasi Brewing Co.",
    price: "$7.00",
    alcoholContent: "5.1%",
  },
  {
    name: "Omission Lager",
    brand: "Widmer Brothers Brewing",
    price: "$7.00",
    alcoholContent: "4.6%",
  },
  {
    name: "The Vaporizer",
    brand: "Double Mountain Brewery",
    price: "$7.50",
    alcoholContent: "6%",
  },
  {
    name: "Watershed IPA",
    brand: "Oakshire Brewing Co.",
    price: "$7.00",
    alcoholContent: "7.1%",
  },
  {
    name: "RPM",
    brand: "Boneyard Brewing Co.",
    price: "$6.50",
    alcoholContent: "7%",
  },
  }
];
function KegList(){
  return (
    <div className = "kegList">
    {kegList.map((keg, index) =>
      <Keg
      name={keg.name}
      brand={keg.brand}
      price={keg.price}
      alcoholContent={keg.alcoholContent}
      index={index}/>
      )}
      </div>
    );
  }

  export default KegList;
