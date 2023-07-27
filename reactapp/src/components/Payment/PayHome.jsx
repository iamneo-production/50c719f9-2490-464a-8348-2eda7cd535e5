import React, { useState,useEffect } from 'react'
import Payment from './Payment'

function PayHome() {
    const [data,setdata]=useState({});
    useEffect(() => {
        console.log("alok")
      getData();
    }, [])

    const getData=()=>{

    }
    
  return (
    <Payment
            facility="hotel"
            location="Kolkata"
            username="Alok kumar"
            travellers="3"
            address="Dhanbad,Jharkahnd, 828114"
            balance="$71"
            date="29/06/2023"
            total='85'
          />
  )
}

export default PayHome