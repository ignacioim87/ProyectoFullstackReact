import React from 'react'
import Producto from ".."
import Link from 'next/link'

import styles from './index.module.css'

function Productos(props) {
  const {
    products
  } = props;
 
  return (
    <div className={styles.root}>
      {products.map(product => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <Producto nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} />
        </Link>
      ))}
    </div>
  )
}

export default Productos