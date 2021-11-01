import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './Fooditems.css'
import SingleItem from './SingleItem/SingleItem';
const Fooditems = () => {
    const [items,setItem]=useState([])
    useEffect(()=>{
        fetch('https://radiant-fjord-34383.herokuapp.com/foodItems')
        .then(res => res.json())
        .then(data =>setItem(data))
    },[])
    return (
        <div>
        
       
       
        <div className='food-items  '>

            <h1 style={{margin:'3%'}}> Food Items</h1>
            <Box sx={{ flexGrow: 1 }}>
      <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
       {  
             items.map(item=> <SingleItem key={item._id} item={item}></SingleItem>)
       
              
            }
               </Grid>
    
    </Box>
            {/* <div className="food-items " > 
            
            </div> */}
           <hr />
        </div>
        </div>
        
    );
};

export default Fooditems;