import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Producto from '../../components/Product'
import DatabaseService from "../../services/api-mysql"

function ProductPage() {
    const router = useRouter()

    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            try {
                const { data:{result} } = await DatabaseService.getProductById(router.query.id);
                setProduct(result)
            } catch (err) {
                console.error(err);
            }

        })()
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

    if (!product) {
        return <div>Loading</div>
    }

    return (
        <Producto nombre={product.nombre} precio={product.precio} descripcion={product.descripcion} image={product.imagen} withButtons={true} handleEdit={handleEdit} handleDelete={handleDelete} />
    )
}

export default ProductPage;