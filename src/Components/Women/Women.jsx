import React from "react";
import Sidebar from "../../Pages/Sidebar";
import { products } from "../Products/Products";
import Card from "../../Pages/Card";
const Women = () => {
  console.log("Women component loaded");
  return (
  <>
 <div className="  p-8 mt-16 ">
       <Sidebar title="Womens Collections"/>
       
       <div className='ml-60 mt-5 flex'>
        {products.map((items)=>(
        <Card />
        ))}
        </div>
     </div>
  </>
  );
};

export default Women;
