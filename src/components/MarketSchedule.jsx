import React from "react";
import PropTypes from "prop-types";

function MarketSchedule(props){
  return (
    <div>
    <style jsx>{`
      div {
        background-color: inherit;
        margin: .5vh;
      }
      `}</style>
      <h3>{props.day}</h3>
      <h4>{props.location}</h4>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
    </div>
  );
}

MarketSchedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default MarketSchedule;
