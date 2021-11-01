import { borderRadius } from '@mui/system';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


import './SingleOrder.css'
const SingleOrder = ({order}) => {
 
//  const {}=MyOrder()
const {setOrderDelete}=useAuth()
    const {_id,orderedfoodname,quantity,status,price,img}=order
  console.log('order items',order)
    // const [deleteorder,setDeleteorder]=useState()
    const handledeleteMyorder =id=>{
      const proceed= window.confirm('Do you want to remove?')
      if(proceed){
        fetch(`https://radiant-fjord-34383.herokuapp.com/deletemyorder/${id}`,{
          method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount>0){
            alert('deleted successfully')
            // convert object into array
            const asArray = Object.entries(order);
            const remainingUser=asArray.filter(userSingleorder=> userSingleorder._id !==id)
            setOrderDelete(remainingUser )
            
  
          }
          
        })
      }
     
      
    }
    
    return (
        <div className='card-style'>
            <div className="card-img">
            <Card.Img variant="top" src={img} style={{ width: '30%', borderRadius:'10px' }} />
            <Card style={{ width: '18rem' }}>
 
  <Card.Body>
    <Card.Title style={{backgroundColor:'yellowrod',color:'white'}} >{orderedfoodname}</Card.Title>
    <h3>Price:{price}</h3>
    <p>Status: {status}</p>
    <p>Quantity: {quantity}</p>
    <button style={{backgroundColor:'firebrick',color:'white',borderRadius:'5px'}} onClick={()=>  handledeleteMyorder(_id)}>Cancel Order</button>
  </Card.Body>
</Card>
</div>
        </div>
    );
};
 
export default SingleOrder;