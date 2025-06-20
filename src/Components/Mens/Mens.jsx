import React from 'react'
import { products } from '../Products/Products'
import Card from '../Card'
export default function Mens () {
  return (
    <div className='flex flex-wrap m-1'>
{products.map((item)=>(
    
        <Card key={item.id} title={item.productname}/>
))}
    </div>
  )
}
