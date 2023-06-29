import React, { useState } from "react"

import Seat from "./Seat"

const SeatMap = ({ seatMap }) => {
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }

  return (
    <div className="container">
      <div className="container">
        <p>Please select your seats:</p>
        <div className="seat-map">

          {seatMap.map((row, rowIndex) => (
            <div
              className="row seat-row"
              style={{ justifyContent: "left" }}
              key={rowIndex}
            >
              {row.map((seat, seatIndex) => (
                <div className="col-1 seat-column" key={seatIndex}>
                  {seat.seat ? (
                    /*values passing*/
                    <Seat
                      seatNumber={seat.seat}
                      isSelected={selectedSeats.includes(seat.seat)}
                      available={seat.available}
                      onClick={() => handleSeatClick(seat.seat)}
                    />
                  ) : (
                    <div className="unavailable" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p>
        Selected Seats: {selectedSeats.join(", ")}
      </p>
    </div>
  )
}

export default SeatMap