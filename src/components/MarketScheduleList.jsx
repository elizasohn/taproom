import React from "react";
import MarketSchedule from "./MarketSchedule";


var scheduleStyle = {
  display:'flex',
  flexWrap: 'wrap',
  justifyContent:'center',
  backgroundColor: '#6fffc3',
  padding: '2vh',
  opacity: '.7',
  overflow: 'visible',
  borderRadius: '4vh',
  margin:'10px'
}


const marketScheduleList = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function MarketScheduleList(){

  return (
    <div style = {scheduleStyle}>
      {marketScheduleList.map((marketSchedule, index) =>
        <MarketSchedule day={marketSchedule.day}
        location={marketSchedule.location}
        hours={marketSchedule.hours}
        booth={marketSchedule.booth}
        key={index}/>
      )}
    </div>
  );
}

export default MarketScheduleList;
