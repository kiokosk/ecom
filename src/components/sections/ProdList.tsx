import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const ProdList = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase">
            <span className="text-logo">Shop now</span> and enjoy{' '}
            <span className="text-logo">30%</span> off on all orders over £50
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600">
            Discover the latest trends and elevate your style with our exclusive offers. From casual wear to luxury items, we’ve got everything you need to look and feel your best.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start items-center space-x-4">
            <Button
              size="lg"
              className="bg-logo text-white opacity-90 hover:opacity-100 hover:shadow-lg"
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              className="bg-gray-500 text-white opacity-90 hover:opacity-100 hover:shadow-lg"
            >
              Explore More
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="/images/ProdList.jpg"
            alt="Shopping Offer"
            width={800}
            height={800}
            className="hidden lg:block rounded-xl shadow-lg"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProdList;
