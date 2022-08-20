import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router'
import DatabaseService from "../../services/api-mysql"
import styles from './index.module.css'

export function Productform({ product }) {
    const router = useRouter()
    const [dataForm, setDataForm] = React.useState({
        nombre: '',
        precio: 0,
        descripcion: ''
    })

    React.useEffect(() => {
        if (product) {
            setDataForm(product);
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (product) {
            //Update
            try {
                await DatabaseService.updateProduct(dataForm, router.query.id).finally(() => router.push('/'))
            } catch (err) {
                console.error(err);
            }
        } else {
            //Alta
            try {
                await DatabaseService.saveProduct(dataForm).finally(() => router.push('/'))
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleChange = ({ target: { name, value } }) => {
        console.log(dataForm);
        setDataForm({ ...dataForm, [name]: value })
    };

    return (
        <div className={styles.root}>
            <Form className={styles.form} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Ingresar nombre" onChange={handleChange} value={dataForm.nombre} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" name="precio" placeholder="Ingresar precio" onChange={handleChange} value={dataForm.precio} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" name="descripcion" placeholder="Ingresar descripcion" onChange={handleChange} value={dataForm.descripcion} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar producto
                </Button>
            </Form>
        </div>
    )
}
