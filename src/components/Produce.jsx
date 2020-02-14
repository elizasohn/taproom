import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div>
      <div class='dropdown'>
      <h3>{props.month}</h3>
      <div class='dropdown-content'>
      <ul>{props.selection.map((sel, index) =>
        <li key={index}> {sel}</li>
      )}</ul>
      </div>
      </div>
      </div>
    );
  }

  Keg.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    alcoholContent: PropTypes.string.isRequired,
  };

  export default Produce;
