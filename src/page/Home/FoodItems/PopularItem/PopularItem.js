import './PopularItem.css'
import React from 'react';
import { Paper } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const PopularItem = ({item}) => {
    const {user}=useAuth()

    const {_id,name,img,price,detail}=item
    return (
        <Paper elevation={0} className="box-container" >

<div className='box'>
    <span className='price'>{price}tk</span>
<img  className='image' src={img} alt="" />
<h3>{name}</h3>
{/* <div className='stars'>
<i className="fas-light fa-star"></i>
<i className="fa-regular fa-star"></i>
<i className="fa-regular fa-star"></i>
<i className="fa-regular fa-star"></i>
<i className="fa-regular fa-star"></i>
   
</div> */}

<Link to={`/orderplace/${_id}`}>
       <button  className='btn'>order now</button>
         </Link>
</div>

  
</Paper >
    );
};

export default PopularItem;