import axios from 'axios'
import Productos from '../components/Product/ProductList'

function Home({ products }) {
  return (
    <>
      <Productos products={products} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get('http://localhost:3000/api/products');
  
  return {
    props: {
      products
    }
  }
}

export default Home