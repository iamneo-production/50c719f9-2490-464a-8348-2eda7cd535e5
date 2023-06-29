import React from "react"

const Seat = ({ seatNumber, available, isSelected, onClick }) => {
  const seatStyle = {
    display: "flex",
    backgroundColor: isSelected ? "#4CAF50" : "#f1f1f1",
    border: isSelected ? "2px solid #4CAF50" : "2px solid #ccc",
    borderRadius: "0.5rem",
    width: "3rem",
    height: "3rem",
    margin: "2%",
    cursor: available ? "pointer" : "not-allowed",
    opacity: available ? 1 : 0.5,
    padding: "10px 25px",
    placeContent: "center",
  }

  return (
    <div
      className="seat"
      style={seatStyle}
      onClick={available ? onClick : null}
    >
      <span>{seatNumber}</span>
    </div>
  )
}

export default Seat