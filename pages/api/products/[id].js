import { pool } from '../../../config/db'

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return await getProduct(req, res)
        }

        case 'DELETE': {
            return await deleteProduct(req, res)
        }

        case 'PUT': {
            return await updateProduct(req, res)
        }

    }

}

const getProduct = async (req, res) => {
    const { id } = req.query

    const [result] = await pool.query('SELECT * FROM producto WHERE id = ?', [id]);

    return res.status(200).json(result[0])
}

const deleteProduct = async (req, res) => {
    const { id } = req.query

    const [result] = await pool.query('DELETE FROM producto WHERE id = ?', [id]);

    return res.status(204).json()
}

const updateProduct = async (req, res) => {
    const { id } = req.query
    try{const {data}= req

    const result = await pool.query('UPDATE producto SET ? WHERE id = ?', [req.body,id]);
    } catch(error){
        console.error(error.message)
    }
    return res.status(204).json()
}


