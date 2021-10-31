import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './ManageOrders.css'
const ManageOrders = () => {
    const {user}=useAuth()
    const [allorders,setAllorders]=useState([])
    const handleDelete=id=>{
      fetch(`https://radiant-fjord-34383.herokuapp.com/deleteanyoneorder/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{ console.log('delete button working',data)   
        if(data.deletedCount>0){
        alert('deleted successfully')
      
        const remainingUser=allorders.filter(userSingleorder=> userSingleorder._id !==id)
        setAllorders(remainingUser )
        

      }
    })

    }
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
     
      <th>Status</th>
      
    <th>Action</th>
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
      
      <td>{allorder.status}</td>
      <td><input type="button" value="Delete"onClick={()=>handleDelete(allorder._id)}/>Delete</td>

    </tr>
  
  </tbody> )
  }
  
</Table>


          
            
        </div>
    );
};

export default ManageOrders;