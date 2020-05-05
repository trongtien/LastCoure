import React from 'react'

import ListProduct from '../components/ListProduct'
import ListBlog from '../components/ListBlog'
import Content from '../components/Content'

const Home = () => {
  return (
    <div>
      <ListProduct />
      <Content />
      <ListBlog />
    </div>
  )
}
export default Home;