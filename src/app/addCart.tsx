'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { addItem } from '@/store/cartSlice';
// import { Product } from '@/typing';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Product } from '../../typing';

const AddCart = ({ product }:{product:Product}) => {
  const dispatch = useDispatch();
  const { toast } = useToast()

  const addToCartHandler = () => {
    toast({
      description: "Item added!",
      variant: "success",
    });
    dispatch(addItem(product));
  };

  return (
    <div className='mt-4'>
        <Button onClick={addToCartHandler} className='bg-logo'>Add To Cart</Button>
    </div>
  )
}

export default AddCart;