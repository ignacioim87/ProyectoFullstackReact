import React from 'react'
import { Productform } from '../../../components/Forms/ProductForm'
import DatabaseService from "../../../services/api-mysql"

function editPage({ product }) {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  if (!product || loading) {
    return <div style={{ color: 'red', textAlign: 'center' }}>loading..</div>
  }

  return (
    <Productform product={product} />
  )
}

export async function getStaticPaths() {
  let products;

  try {
    const { data: { result } } = await DatabaseService.getProducts();
    products = result;
  } catch (err) {
    console.error(err);
  }
  const paths = products?.map((product) => ({
    params: {
      id: `${product.id}`
    }
  }))

  return {
    paths: paths ?? [],
    fallback: true, // can also be false or 'blocking'
  }
}

export async function getStaticProps(context) {
  let product;

  try {
    const { data: { result } } = await DatabaseService.getProductById(context.params.id);
    product = result;
  } catch (err) {
    console.error(err);
  }

  return {
    props: { product: product ?? {} }, // will be passed to the page component as props
    revalidate: 1
  }
}

export default editPage