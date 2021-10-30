import { borderRadius } from '@mui/system';
import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleOrder.css'
const SingleOrder = ({order}) => {
    const {orderedfoodname,quantity,status,price,img}=order
    return (
        <div>
            <div className="card-img">
            <Card.Img variant="top" src={img} style={{ width: '30%', borderRadius:'10px' }} />
            <Card style={{ width: '18rem' }}>
 
  <Card.Body>
    <Card.Title>{orderedfoodname}</Card.Title>
    <h3>Price:{price}</h3>
    <p>Status: {status}</p>
    <p>Quantity: {quantity}</p>
    <button>Cancel Order</button>
  </Card.Body>
</Card>
</div>
        </div>
    );
};

export default SingleOrder;