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
    const history=useHistory()
    const location=useLocation()
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
            const redirect_url=location.state?.from ||'/home'
            history.push(redirect_url)
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
            <form className='form w-75 mx-auto' xs={8} onSubmit={handleSubmit(onSubmit)}>
      <label>username: </label>
      <input className='m-3 p-2' defaultValue={user?.displayName} {...register("username")} />
      <br />
      <label>Email: </label>
      <input className='m-3 p-2' defaultValue={user?.email} {...register("email")} />
      <br />
      <label>Address: </label>
      <input  className='m-3 p-2'  {...register("address")} />
      <br />
      <label>Contact: </label>
      <input className='m-3 p-2' type="string" {...register("contactnumber")} />
      <br />
      <label>Ordered Item: </label>
      <input className='m-3 p-2' defaultValue={clickToOrder?.name} {...register("orderedfoodname")} />
      <br />
      <label>Date: </label>
      <LocalizationProvider className='m-3 p-2' dateAdapter={AdapterDateFns}>
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
      <label>Quantity: </label>
      <input className='m-3 p-2' type="number" {...register("quantity")} />
      <br />
      <label>Price: </label>
      <input className='m-3 p-2' defaultValue={clickToOrder?.price} type="integer" {...register("price")} />
      <br />
     <input className='m-3 p-2 bg-danger' type="submit" />
    </form>
        </div>
    );
};

export default OrderPlace;