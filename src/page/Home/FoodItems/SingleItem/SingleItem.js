import { Avatar, Card, CardContent, CardHeader, CardMedia,Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const SingleItem = ({item}) => {
  const {user}=useAuth()

  const {_id,name,img,price,detail}=item
    return (
        <div>
            {/* <h1>{item.name}</h1> */}
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
       
        title={name}
        subheader={price}
      
      />
      <CardMedia
        component="img"
        height="300"
        image={img}
        alt="Food items"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {detail}
        </Typography>
        <Link to={`/orderplace/${_id}`}>
        <button >order now</button>
        </Link>
      
      </CardContent>
     
      
    </Card>
        </div>
    );
};

export default SingleItem;