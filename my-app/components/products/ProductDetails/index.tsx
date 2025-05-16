
import React, { FC } from 'react'
import { ProductImage } from './ProductImage'
import { ProductDetailInfo } from './ProductInfo'
import { Breadcumb } from '@/components/cart/CartDetails/Breadcumb'
import { Product } from '@/app/products/type'

const breadcrumbList:string[] = ['sản phẩm', 'chi tiết sản phẩm']

interface IProductDetails {
    product: Product
}

export const ProductDetails:FC<IProductDetails> = ({product}) => {
  return (
    <div className="container mx-auto w-full flex flex-col gap-4">
    <Breadcumb breadcrumbList={breadcrumbList}/>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <ProductImage imageUrl={product.imageUrl} alt={product.title}/>
        <ProductDetailInfo product={product}/>
    </div>
    </div>
  )
}
