import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './Fooditems.css'

import PopularItem from './PopularItem/PopularItem';
import SingleItem from './SingleItem/SingleItem';
const Fooditems = () => {
    const [items,setItem]=useState([])
    useEffect(()=>{
        fetch('https://radiant-fjord-34383.herokuapp.com/foodItems')
        .then(res => res.json())
        .then(data =>setItem(data))
    },[])
    return (

       <section className='popular'id="popular">
<h1 className='heading'>our <span>Popular Items</span></h1>

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

{  
      items.map(item=> 
     
      <Grid item xs={12} sm={4} md={4} >
      <PopularItem key={item._id} item={item}></PopularItem>
     
    </Grid>
    
   
      )
     }


</Grid>


        <h1 className='heading'>our <span>Speciality</span></h1>

       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

    {  
             items.map(item=> 
            
             <Grid item xs={12} sm={4} md={4} >
             <SingleItem key={item._id} item={item}></SingleItem>
            
           </Grid>
           
          
             )
            }
   
  
</Grid>

        </section>

        
    );
};

export default Fooditems;