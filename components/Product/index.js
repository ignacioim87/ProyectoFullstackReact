import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'

import styles from './index.module.css';

function Producto({ id, nombre, precio, descripcion, image, withButtons, handleDelete, handleEdit }) {
  return (
    <Link href={`/products/${id}`}>
      <Card className={styles.root}>
        <Card.Img variant="top" height="190px" width="200px" src={image} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Card.Text>
            {precio}
          </Card.Text>
        </Card.Body>
        {withButtons && handleDelete && handleEdit &&
          <>
            <Button variant="primary" onClick={() => handleEdit()}>Editar</Button>
            <Button variant="danger" onClick={() => handleDelete(id)}>Eliminar</Button>
          </>}
      </Card>
    </Link>

  )
}

export default Producto