import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CartPage = () => {

  // Dummy data for hotels, cars, and flights
  const hotels = [
    {
      id: 1,
      name: 'Hotel A',
      image: 'hotel_a.jpg',
      price: 100,
    },
    {
      id: 2,
      name: 'Hotel B',
      image: 'hotel_b.jpg',
      price: 150,
    },
    {
        id: 3,
        name: 'Hotel B',
        image: 'hotel_b.jpg',
        price: 150,
      },
    // Add more hotels here
  ];

  const cars = [
    {
      id: 1,
      name: 'Car A',
      image: 'car_a.jpg',
      price: 50,
    },
    {
      id: 2,
      name: 'Car B',
      image: 'car_b.jpg',
      price: 70,
    },
    {
        id: 3,
        name: 'Car B',
        image: 'car_b.jpg',
        price: 70,
      },
    // Add more cars here
  ];

  const flights = [
    {
      id: 1,
      name: 'Flight A',
      image: 'flight_a.jpg',
      price: 200,
    },
    {
      id: 2,
      name: 'Flight B',
      image: 'flight_b.jpg',
      price: 250,
    },
    // Add more flights here
  ];

  const handleCancelBooking = () => {
    // Logic to cancel the booking
    // You can implement your own logic here
  };

  return (
    <Container style={{backgroundColor:"#9AC5F4",borderRadius:"10px",boxShadow: "1px 2px 9px #27374D"}}>
      <h1 className='font-weight-bold text-center' style={{padding:10,margin:10}}>Your Cart</h1>

      <h2 className='font-weight-bold' style={{padding:10,margin:10}}>Hotels</h2>
      <Row className='row'> 
        {hotels.map((hotel) => (
          <Col className='col-sm-10' key={hotel.id} md={4}>
            <Card className="card text-center" style={{borderRadius: "10px", boxShadow: "3px 3px 10px #27374D" }}>
              <Card.Img variant="top" src={hotel.image} />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>Price: ${hotel.price}</Card.Text>
                <Button variant="primary">Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className='font-weight-bold' style={{padding:10,margin:10}}>Cars</h2>
      <Row className='row'>
        {cars.map((car) => (
          <Col className='col-sm-6'   key={car.id} md={4}>
            <Card className="card text-center" style={{ borderRadius: "10px", boxShadow: "3px 3px 10px #27374D" }}>
              <Card.Img variant="top" src={car.image} />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>Price: ${car.price}</Card.Text>
                <Button variant="primary">Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className='font-weight-bold' style={{padding:10,margin:10}}>Flights</h2>
      <Row className='row'>
        {flights.map((flight) => (
          <Col className='col-sm-6' key={flight.id} md={4}>
            <Card className="card text-center" style={{ borderRadius: "10px", boxShadow: "3px 3px 10px #27374D" }}>
              <Card.Img variant="top" src={flight.image} />
              <Card.Body>
                <Card.Title>{flight.name}</Card.Title>
                <Card.Text>Price: ${flight.price}</Card.Text>
                <Button variant="primary">Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    
    </Container>
  );
};

export default CartPage;
