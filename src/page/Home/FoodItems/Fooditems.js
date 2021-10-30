import React, { useEffect, useState } from 'react';
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
            <h1> Food Items</h1>
            <div className="food-items"> 
            {
                items.map(item=> <SingleItem key={item._id} item={item}></SingleItem>)
            }
            </div>
           
        </div>
    );
};

export default Fooditems;