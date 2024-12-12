import React from 'react'
// import ProdList from '../section/ProdList'
import Category from '../sections/Category'
import Products from '../sections/Products'
import ProdList from '../sections/ProdList'

const Home = () => {
  return (
    <div>
        <ProdList />
        <Category />
        <Products />
    </div>
  )
}

export default Home