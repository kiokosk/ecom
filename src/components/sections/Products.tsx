"use client";

import { getAllProducts } from '@/Request/requests';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Product } from '../../../typing';

const Products = () => {
  const [products, setProducts] = useState<Product[]|null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
        setLoading(true);
        try {
            const products:Product[] = await getAllProducts();
            setProducts(products);
        } catch (error) {
            console.log('!!error=', error)
        } finally {
            setLoading(false);
        }
    }
    getData();
  }, [])
  return (
    <div className='pt-16 pb-12'>
        <h1 className='text-center font-bold text-2xl'>
            Products
        </h1>
        {loading ? (
            <div className='flex justify-center ittems-center mt-16'>
                <Loader size={32} className='animete-apin'/>
            </div>
        ) : (
            <div className='w-4/5 mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {products?.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
        )}
    </div>
  )
}

export default Products