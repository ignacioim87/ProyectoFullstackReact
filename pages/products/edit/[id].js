import React from 'react'
import { Productform } from '../../../components/Forms/ProductForm'
import DatabaseService from "../../../services/api-mysql"

function editPage({ product }) {
  if (!product) {
    return <div>loading..</div>
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
  const paths = products.map((product) => ({
    params: {
      id: `${product.id}`
    }
  }))

  return {
    paths: paths ?? [],
    fallback: false, // can also be true or 'blocking'
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
  }
}

export default editPage