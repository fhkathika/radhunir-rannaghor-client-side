import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './ManageOrders.css'
const ManageOrders = () => {
    const {user}=useAuth()
    const [allorders,setAllorders]=useState([])
    useEffect(()=>{
        fetch('https://radiant-fjord-34383.herokuapp.com/confirmorder')
        .then(res => res.json())
        .then(data =>setAllorders(data))
        
    },[])
   
    return (
        <div>
            <h1>ManageOrders</h1>
           
                    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Customer Name</th>
      <th>Customer Email</th>
      <th>Customer Contact</th>
      <th>Order Item</th>
      <th>Order Price</th>
     
    <th>Action</th>
      <th>Status</th>
    </tr>
  </thead>
  {
      allorders.map(allorder =>
        <tbody key={allorder._id}>
    <tr>
        
      <td>{allorder.username}</td>
      <td>{allorder.email}</td>
      <td>{allorder.contactnumber}</td>
      <td>{allorder.orderedfoodname}</td>
      <td>{allorder.price}</td>
      <td>delete</td>
      <td>{allorder.status}</td>
    </tr>
  
  </tbody> )
  }
  
</Table>


          
            
        </div>
    );
};

export default ManageOrders;