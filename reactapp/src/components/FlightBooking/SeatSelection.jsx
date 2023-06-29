import React, { useState } from "react"
import SeatMap from "./SeatMap"
import { seatMap } from "./stores/seatMap"
// import "./SeatSelection.css"

const SeatSelection = () => {
  
return (
    <div className="seat-selection-container">
      <h2 className="seat-choosing">You Can Choose Your Seat</h2>
      <SeatMap seatMap={seatMap} />
    </div>
  )
}
export default SeatSelection