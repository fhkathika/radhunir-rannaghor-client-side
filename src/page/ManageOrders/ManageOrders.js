import { Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './ManageOrders.css'
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const ManageOrders = () => {
    const {user}=useAuth()
    const [allorders,setAllorders]=useState([])
    const [updateStatus,setUpdateStatus]=useState('')
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
//modifiedCount
    }
    const handlupdateStatus=id=>{
      console.log(`here is update button ${id}`)
      // allorders.status='approved'
      fetch(`https://radiant-fjord-34383.herokuapp.com/updatestatus/${id}`,{
        method : 'PUT',
        headers : {
          'content-type': 'application/json'
        },
        body: JSON.stringify(allorders)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        
        
      })

    }
    useEffect(()=>{
        fetch('https://radiant-fjord-34383.herokuapp.com/confirmorder')
        .then(res => res.json())
        .then(data =>setAllorders(data))
        
    },[])
   
    return (
        <div  >
            <h1>ManageOrders</h1>
            <div className='m-3' >
           
                    <Table responsive  striped bordered hover>
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
      
      <td> <Switch {...label} onClick={()=>handlupdateStatus(allorder._id)} />{allorder.status}</td>
      <td><input type="button" value="Delete"onClick={()=>handleDelete(allorder._id)}/>Delete</td>

    </tr>
  
  </tbody> )
  }
 
  
</Table>


</div>        
  
        </div>
    );
};

export default ManageOrders;