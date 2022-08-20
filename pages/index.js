import axios from 'axios';
import React from 'react'
import Productos from '../components/Product/ProductList'
import DatabaseService from '../services/api-mysql'

function Home() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { data: { result } } = await DatabaseService.getProducts();
        setProducts(result)
      } catch (err) {
        console.error(err);
      }

    })()
  }, [])

  return (
    <Productos products={products} />
  )
}

export default Home