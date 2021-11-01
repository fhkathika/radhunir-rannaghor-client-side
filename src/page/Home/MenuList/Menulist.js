import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MenuList.css'
const Menulist = () => {
    return (
        <div>
             <h2>Item Menu List</h2>
             <Carousel >
  <Carousel.Item>
      <div className="menulist w-50 mx-auto">
      <div className='menu-header'><h2>Lunch&Dinner Item</h2></div>
  <menu>  
  <li> Beef Biryani - 180 / =</li>
<li> (Fried Rice, Fry, Vegetable, Chicken Sweet Curry) - 180 / = or (Fried Rice, Chicken Donut, Fry, Vegetable) - 200 / = (Set)</li>
<li> Arabian Khafsa - 250 / =</li>
<li>Beef raw - 250 / =</li>
<li>(Roasted Khichuri, Roasted Eggs) - 120 / =</li>
<li>(5 types of small steamed mash, roasted eggs) - 140 / =</li>
<li>Chicken Raw - 220 / =</li>
<li>Khasir Kachchi - 350 / =</li>
<li>(White polao, chicken roast, egg, salad) - 150 / =</li>
<li> Chicken Biryani - 150 /</li> 

 </menu> 
 </div>
    
  </Carousel.Item>
  <Carousel.Item>
      <div className="menulist w-50 mx-auto">
  <div className='menu-header'><h2>Snacks Item</h2></div>
      <menu>
      <li>(Grill + Butter Naan) - 120 / =</li>
 <li>Nachos - 150 / =</li>
 <li>Chicken Sharma - 120 / =</li>
 <li>Pattis - 50 / =</li>
 <li>Chicken Momo - 120 / = (6 pieces)</li>
 <li>Chicken Bun - 40 / =</li>
 <li>Bread pizza - 130 / =</li>
 <li>Anthony - 20 / =</li>
 <li>Egg Chop - 15 / =</li>
 <li>Chicken Samucha - 15 / =</li>
 <li>White Sauce Pasta - 200 / -</li>
 <li>Chicken with Vegetable Roll - 25 / =</li>
 <li>Yoghurt - 120 / = (1 box)</li>
 <li>Chicken Burger - 120 / =</li>
 <li>Chicken Chaomin - 180 / =</li>
 <li>Chatpati - 150 / = (1 box)</li>
 <li>Fuchka - 80 / = (1 plate - 10 hours)</li>
 <li>Moghlai Parota - 120 / =</li>
 <li>Thai Soup - 250 / = (1 box)</li>
 <li>(Luchi-vegetables) - (৭ + 20 /) = 26 / =</li>
 <li>Dal Puri - 10 / =</li>
 <li>Italian Liania - 50 / = (1 piece)</li>
      </menu>
  </div>
  </Carousel.Item>
  <Carousel.Item>
      <div className="menulist w-50 mx-auto">
          <div className='menu-header'><h2>Disert Item</h2></div>
   <menu>
   <li>Laddu - 12 / =</li>
<li>Rice Jorda - 350 / = (1 box) Half box - 185 / =</li>
<li>Cauvery Rice Return - 400 / = (1 box)</li>
<li>Cup cake - 40 / =</li>
<li>Pudding - 40 /</li>
<li>Donut - 40 / =</li>
<li>Sponge Sweet - 150 / = (1 box-10 hrs)</li>
<li>ustard - 400 / = (1 box) 41.Takdai - 200 / = (1 box) Half kg - 100 / =</li>
<li>Sweet Yogurt - 220 / =</li>
<li>Pastry - 80 / =</li>
   </menu>
   </div>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Menulist;