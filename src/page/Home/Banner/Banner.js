import { color } from '@mui/system';
import React from 'react';
import { Row,Col,Image, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
     <section className="home" id="home">
         <div className='image-mobile'>
    {/* <img src="https://i.ibb.co/qs6JP73/nachos3-removebg-preview.png" alt="" /> */}
    <img src="https://i.ibb.co/JHkrL8Q/zarda-removebg-preview.png" alt="" />
    
</div>
<div className="content">
<h2>Have food and make fun with <span style={{color:'firebrick'}}>Radhunir Rannaghor</span></h2>
<p>Always ready to satisfy our customers.Because Home tastes more like 'Mom-made' food than 'Homemade' food</p>
<Link to='/orderplace/:id' >
<button  className='btn'>Order now</button>
</Link>
</div>
<div className='image'>
    {/* <img src="https://i.ibb.co/qs6JP73/nachos3-removebg-preview.png" alt="" /> */}
    <img src="https://i.ibb.co/JHkrL8Q/zarda-removebg-preview.png" alt="" />
    
</div>
        
        {/* <div  className="w-100  d-flex"  >
         
        <Image className="w-50 " src="https://i.ibb.co/SyHzz07/baby-sweet.jpg"  />
        <Image className="w-50"  src="https://i.ibb.co/Wt2CCfy/bg9.jpg"  />
</div> */}
</section>
          
           
 
    );
};

export default Banner;