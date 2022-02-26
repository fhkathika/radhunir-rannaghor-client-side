import { Avatar, Card, CardContent, CardHeader, CardMedia,Paper,Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { padding } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './SingleItem.css'
import useAuth from '../../../hooks/useAuth';
import { Container } from 'react-bootstrap';

const SingleItem = ({item}) => {
  const {user}=useAuth()

  const {_id,name,img,price,detail}=item
    return (
  <Paper elevation={0} className="box-form" >


  <div className='contant-detail'>
  <img  className='image' src={img} alt="" />
<h3>{name}</h3>

  <p>{detail}</p>
  </div>
  
</Paper >

     
    //     <div>
    //         {/* <h1>{item.name}</h1> */}
    //         <Card >
    
    //   <CardMedia
    //    className='image'
    //     image={img}
    //     alt="Food items"
    //   />
    //   <CardContent className='container-detail'>
    //   <Typography  >
    //      price: {price}
    //     </Typography>
    //   title={name}
    //     <Typography variant="body2" color="text.secondary">
    //     {detail}
    //     </Typography>
    //     <Link to={`/orderplace/${_id}`}>
    //     <button  style={{backgroundColor:'firebrick',color:'white',borderRadius:'10px'}}>order now</button>
    //     </Link>
      
    //   </CardContent>
     
      
    // </Card>
    //     </div>
    );
};

export default SingleItem;