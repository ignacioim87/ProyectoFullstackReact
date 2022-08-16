import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';

function Producto({ nombre, precio, descripcion }) {
  return (
    <Card className={styles.root}>
      <Card.Img variant="top" height="190px" width="200px" src='' />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
          {precio}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Producto