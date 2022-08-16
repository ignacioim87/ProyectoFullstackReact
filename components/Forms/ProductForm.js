import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useRouter } from 'next/router'
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './index.module.css'

export function Productform() {
    const router = useRouter()
    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        precio: 0
    })

    const getProduct = async () => {
        const { data } = await axios.get('/api/products/' + router.query.id)
        setProduct({ nombre: data.nombre, descripcion: data.descripcion, precio: data.precio })
    }

    useEffect(() => {
        if (router.query.id) {
            getProduct(router.query.id);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (router.query.id) {
            //Update
            try {
                await axios.put('/api/products/' + router.query.id, product)
                router.push('/');
            } catch (err) {
                console.error(err);
            }
        } else {
            //Alta
            try {
                await axios.post('/api/products', product)
                router.push('/');
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleChange = ({ target: { name, value } }) =>
        setProduct({ ...product, [name]: value })


    return (
        <div className={styles.root}>
            <Form className={styles.form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Ingresar nombre" onChange={handleChange} value={product.nombre} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" name="precio" placeholder="Ingresar precio" onChange={handleChange} value={product.precio} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" name="descripcion" placeholder="Ingresar descripcion" onChange={handleChange} value={product.descripcion} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar producto
                </Button>
            </Form>
        </div>
    )
}
