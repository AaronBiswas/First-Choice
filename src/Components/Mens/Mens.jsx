import React from 'react';
import Sidebar from '../../Pages/Sidebar';
import { products } from '../Products/Products';
import CardWrapper from '../CardWrapper';
import { motion } from 'framer-motion';
import Card from '../../Pages/Card';
const Mens = () => {
  console.log("Mens component loaded");

  return (
    <>
    
    <div className="  p-8 mt-16 ">
      <Sidebar title="Mens Collections"/>
      
      <div className='ml-60 mt-5 flex'>
       {products.map((items)=>(
       <Card />
       ))}
       </div>
    </div>
    </>
  );
};

export default Mens;
