import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Delivery from './Delivery/Delivery';
import Fooditems from './FoodItems/Fooditems';
import Menulist from './MenuList/Menulist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Fooditems></Fooditems>
            <Menulist></Menulist>
            <Delivery></Delivery>
           
          
        </div>
    );
};

export default Home;