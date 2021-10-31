import Button from '@restart/ui/esm/Button';
import React, { useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './AddNewService.css'

const AddNewService = () => {
  const [adduser,setAdduser]=useState([])
 const nameRef=useRef()
 const detailRef=useRef()
 const imgRef=useRef()
 const priceRef=useRef()
  
 
const handleAdduser=e=>{
 
  const name=nameRef.current.value
  const detail=detailRef.current.value
  const img=imgRef.current.value
  const price=priceRef.current.value
  const addNewUser={name,detail,img,price}
    e.preventDefault()
   
    fetch('https://radiant-fjord-34383.herokuapp.com/adduser',{
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },body : JSON.stringify(addNewUser)
    })
    .then(res => res.json())
    .then(data => setAdduser(data))
}

    return (
        <div>
            <h1>AddNewService</h1>
            <div className='mx-auto w-75'>
            <form onSubmit={handleAdduser}>

               <label>Item Name: </label> <input className="w-50 m-3 m-3 p-2" type="text" ref={nameRef} placeholder="enter name" />
               <br />
               <label>Item Detail: </label><input className="w-75 m-3 m-3 p-2" type="text" ref={detailRef} placeholder="enter detail"/>
               <br />
               <label>Image:</label> <input ref={imgRef} placeholder="image url" className="w-25 m-3 p-2" type="text" placeholder="enter image url"/>
              
               <label>Price: </label> <input className="w-25 mx-auto m-3 p-2" type="text" ref={priceRef} />
               <br />
                <input className="w-25 mx-auto m-3 p-2" type="submit" value="Add Item" />
            </form>
            
            </div>
            
            
        </div>
    );
};

export default AddNewService;