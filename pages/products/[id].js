import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'

function ProductPage({ product }) {
    const router = useRouter()

    const handleDelete = async (id) => {
        try {
            await axios.delete('/api/products/' + id)
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height="190px" width="200px" src='' />
            <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>
                    {product.descripcion}
                </Card.Text>
                <Card.Text>
                    {product.precio}
                </Card.Text>
                <Button variant="primary" onClick={() => router.push('/products/edit/' + product.id)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export const getServerSideProps = async (context) => {
    const { data: product } = await axios.get('http://localhost:3000/api/products/' + context.query.id);

    return {
        props: {
            product
        }
    }
}




export default ProductPage;