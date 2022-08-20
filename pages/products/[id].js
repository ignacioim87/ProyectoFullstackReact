import React from 'react'
import Producto from '../../components/Product'
import DatabaseService from "../../services/api-mysql"
import { useRouter } from 'next/router'

function ProductPage({ product }) {
    const router = useRouter()

    const handleDelete = async (id) => {
        try {
            await DatabaseService.deleteProduct(id)
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const handleEdit = () => router.push('/products/edit/' + product.id);

    if (!product) {
        return <div>Loading</div>
    }

    return (
        <Producto id={product.id} nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} image={product.imagen} withButtons={true} handleEdit={handleEdit} handleDelete={handleDelete} />
    )
}

export async function getStaticPaths() {
    let products;

    try {
        const { data: { result } } = await DatabaseService.getProducts();
        products = result;
    } catch (err) {
        console.error(err);
    }
    const paths = products.map((product) => ({
        params: {
            id: `${product.id}`
        }
    }))

    return {
        paths: paths ?? [],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    let product;

    try {
        const { data: { result } } = await DatabaseService.getProductById(context.params.id);
        product = result;
    } catch (err) {
        console.error(err);
    }

    return {
        props: { product: product ?? {} }, // will be passed to the page component as props
    }
}

export default ProductPage;
