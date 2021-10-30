import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './MyOrder.css'
import SingleOrder from './SingleOrder/SingleOrder';
const MyOrder = () => {
    const {user}=useAuth()
   
    const [userorder,setUserorder]=useState([])
    
    useEffect(()=>{
        fetch(`https://radiant-fjord-34383.herokuapp.com/getmyorder/${user?.email}`)
        .then(res => res.json())
        .then(data=> setUserorder(data))
    },[user?.email])
    return (
        <div>
            <h1>MyOrder</h1>
            <div className="myorder"> 
        {
            userorder.map(order => <SingleOrder 
                key={order._id}
                order={order}
            ></SingleOrder>)
        }
          </div>  
        </div>
    );
};

export default MyOrder;