import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Producto from '../../components/Product'

function ProductPage({ product }) {
    const router = useRouter()

    React.useEffect(() => {
        if (!product) {
            router.push('/');
        }
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('/api/products/' + id)
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const handleEdit = () => router.push('/products/edit/' + product.id);

    return (
        <Producto nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} image={product.imagen} withButtons={true} handleEdit={handleEdit} handleDelete={handleDelete} />
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