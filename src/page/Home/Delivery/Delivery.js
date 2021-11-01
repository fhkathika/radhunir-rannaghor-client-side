import { Grid, Paper } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import './Delivery.css'
const Delivery = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <div className="container-fluid " >
            <h2>Our Delivery</h2>
           
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={6} md={4}>
        <img className='w-100 delivery-img' src="https://i.ibb.co/bHrxfBf/d5.jpg" alt="" />
        
        </Grid>
        <Grid item xs={6} md={4}>
        <img   className='w-100 delivery-img'src="https://i.ibb.co/rdgdR9F/bg11.jpg" alt="" />
        </Grid>
        <Grid item xs={6} md={4}>
        <img className='w-100 delivery-img' src="https://i.ibb.co/fSydhFh/d4.jpg" alt="" />
        </Grid>
        <Grid item xs={6} md={4}>
        <img className='w-100 delivery-img' src="https://i.ibb.co/H4MmhTN/delivery2.jpg" alt="" />
        </Grid>
        <Grid item xs={6} md={4}>
       
        <img  className='w-100 delivery-img' src="https://i.ibb.co/GktJw3w/bg8.jpg" alt="bg8" border="0"></img>
        </Grid>
        <Grid item xs={6} md={4}>
        <img className='w-100 delivery-img' src="https://i.ibb.co/fCgSxXY/d3.jpg" alt="" />
        </Grid>
        <Grid item xs={6} md={4}>
        <img className='w-100 delivery-img' src="https://i.ibb.co/N9sV4fJ/d6.jpg" alt="" />
        </Grid>
        <Grid item xs={6} md={4}>
        <img className='w-100 delivery-img'  src="https://i.ibb.co/3fbgsvq/bg3.jpg" alt="bg3" border="0"/>

        </Grid>
        <Grid item xs={6} md={4}>
        <img className='w-100 delivery-img' src="https://i.ibb.co/DLQ4NDX/delivery.jpg" alt="" />
        </Grid>
      </Grid>
    </Box>
  {/* <Grid  xs={6} md={4}>
   <img className='w-100 delivery-img' src="https://i.ibb.co/fSydhFh/d4.jpg" alt="" />
  </Grid>
  <Grid xs={6} md={4}>
  <img   className='w-100 delivery-img'src="https://i.ibb.co/rdgdR9F/bg11.jpg" alt="" />
  </Grid>
  <Grid xs={6} md={8}>
  <img className='w-100 delivery-img' src="https://i.ibb.co/fCgSxXY/d3.jpg" alt="" />
  </Grid> */}

    
          {/* <div>
            <img src="https://i.ibb.co/bHrxfBf/d5.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/N9sV4fJ/d6.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/DLQ4NDX/delivery.jpg" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/H4MmhTN/delivery2.jpg" alt="" />
          </div> */}
      
      </div>
     
    );
};

export default Delivery;