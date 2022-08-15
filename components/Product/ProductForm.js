import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useRouter } from 'next/router'
import InputGroup from 'react-bootstrap/InputGroup';

export function Productform() {
    
    const [product, setProduct] = useState({
        nombre: '',
        descripcion: '',
        precio: 0
    })

    const router = useRouter()

    useEffect(() => {

        const getProduct = async () => {
            const { data } = await axios.get('/api/products/' + router.query.id)
            //setProduct({ nombre: data.nombre, descripcion: data.descripcion, precio: data.precio })
            console.log(data);
        }

        if (router.query.id) {
            getProduct(router.query.id);
        
        }


    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (router.query.id) {
            console.log('update')
            await axios.put('/api/products/' + router.query.id, product)
        } else {
            const res = await axios.post('/api/products', product)
            console.log(res);
            router.push('/');
        }
    };

    const handleChange = ({ target: { name, value } }) =>
        setProduct({ ...product, [name]: value })


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Ingresar nombre" onChange={handleChange} value={product.nombre} />
                </Form.Group>

                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="number" name="precio" placeholder="Ingresar precio" onChange={handleChange} value={product.precio} />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Descripcion</InputGroup.Text>
                    <Form.Control as="textarea" name="descripcion" placeholder="Ingresar descripcion" onChange={handleChange} value={product.descripcion} />
                </InputGroup>

                <Button variant="primary" type="submit">
                    Guardar producto
                </Button>
            </Form>
        </div>
    )
}
