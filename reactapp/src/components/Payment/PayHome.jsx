import React, { useState, useEffect } from "react";
import Payment from "./Payment";
import { useLocation } from "react-router-dom";

function PayHome() {
  const [data, setdata] = useState({});

  const location = useLocation();
  const props = location.state;

  return (
    <Payment
      facility={props.facility}
      location={props.location}
      username={props.username}
      travellers={props.travellers}
      address={props.address}
      balance={props.balance}
      date={props.date}
      total={props.total}
    />
  );
}

export default PayHome;
