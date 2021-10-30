import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import './OrderPlace.css'
import useAuth from '../../hooks/useAuth';
import { TextField } from '@mui/material';
const OrderPlace = () => {
    const [clickToOrder,setClickToOrder]=useState([])
    const [value,setValue]=useState(null)
    const {user}=useAuth()
    const {id}=useParams()
    const location=useLocation()
    const history=useHistory()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = ({_id,name,detail,...rest}) => {
        rest.status="pending"
     fetch('https://radiant-fjord-34383.herokuapp.com/confirmorder',{
         method : 'POST',
         headers : {
             'content-type' : 'application/json'
         },
         body : JSON.stringify(rest)

     })
     .then(res =>res.json())
     .then (restdata =>{
        // setClickToOrder(restdata)
        if(restdata.insertedId){
          alert('order successfull')
          reset(restdata)
          reset()
            // const redirect_url=location.state?.from ||'/home'
            // history.push(redirect_url)

        }
        else{
            alert('sorry you cant order')
        }
     })
        
        console.log(rest)
    
    };
    //load data
    useEffect(()=>{
        fetch(`https://radiant-fjord-34383.herokuapp.com/orderplace/${id}`)
        .then(res => res.json())
        .then(data =>{
          setClickToOrder(data)
            reset(data)
            console.log('load data', data)
        })
    },[reset])

    return (
        <div>
            <h1>Place Your Order</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <label>username:</label>
      <input defaultValue={user?.displayName} {...register("username")} />
      <br />
      <label>Email:</label>
      <input defaultValue={user?.email} {...register("email")} />
      <br />
      <label>Address:</label>
      <input   {...register("address")} />
      <br />
      <label>Contact:</label>
      <input type="string" {...register("contactnumber")} />
      <br />
      <label>Ordered Item:</label>
      <input defaultValue={clickToOrder?.name} {...register("orderedfoodname")} />
      <br />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="date"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
<br />
      <label>Quantity:</label>
      <input type="number" {...register("quantity")} />
      <br />
      <label>Price:</label>
      <input defaultValue={clickToOrder?.price} type="integer" {...register("price")} />
      <br />
     
    
      <input type="submit" />
    </form>
        </div>
    );
};

export default OrderPlace;