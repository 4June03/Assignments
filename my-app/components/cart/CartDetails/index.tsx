import React from 'react'
import { Breadcumb } from './Breadcumb'
import { CartContainer } from './CartContainer'
import { CartHeader } from './CartHeader'


export const CartDetails = () => {
  return (
    <div className='container mx-auto w-full flex flex-col gap-4'>
        <Breadcumb/>
        <CartHeader/>
        <CartContainer/>
    </div>
  )
}
