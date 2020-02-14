import React from "react";
import PropTypes from "prop-types";

function Produce(props){
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

  Produce.propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.string.isRequired,
  };

  export default Produce;
