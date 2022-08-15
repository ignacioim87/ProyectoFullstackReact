import axios from 'axios'
import Producto from "../components/Product"
import Link from 'next/link'

function Home({ products }) {
  //console.log(products);
  return (
    <div>


      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <div>
            <Producto nombre={product.nombre} precio={product.precio} descripcion={product.descripcion}/>
          </div>
        </Link>
      ))}

    </div>
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