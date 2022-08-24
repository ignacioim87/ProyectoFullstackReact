import React from 'react'
import Producto from ".."

import styles from './index.module.css'

function Productos({ products }) {
  return (
    <div className={styles.root}>
      {products.map(product => (
          <div key={product.id} className={styles.container}>
            <Producto id={product.id} nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} image={product.imagen} />
          </div>
      ))}
    </div>
  )
}

export default Productos