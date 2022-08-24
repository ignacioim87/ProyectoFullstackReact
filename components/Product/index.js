import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'

import styles from './index.module.css';

function Producto({ id, nombre, precio, descripcion, image, withButtons, handleDelete, handleEdit }) {
  return (
    <Card className={styles.root} text="dark" border="dark">
      <Link href={`/products/${id}`}>
        <Card.Img variant="top" height="190px" width="200px" src={image} />
      </Link>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text className={styles.p}>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        Precio: ${precio}
      </Card.Footer>
      {withButtons && handleDelete && handleEdit &&
        <>
          <Button variant="dark" onClick={() => handleEdit()}>Editar</Button>
          <Button variant="light" onClick={() => handleDelete(id)}>Eliminar</Button>
        </>}
    </Card>
  )
}

export default Producto