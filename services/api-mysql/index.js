import axios from "axios";
class DatabaseService   {
    client;

    constructor() {
        this.client = axios.create({
            baseURL: "us-cdbr-east-06.cleardb.net"
        })
    }

    saveProduct = (data) => this.client.post(`/add-product`, data);

    getProducts = () => this.client.get("/get-products");

    getProductById = (id) => this.client.get(`/get-product/${id}`);

    updateProduct = (data, id) => this.client.put(`/update-product/${id}`, data);

    deleteProduct = (id) => this.client.delete(`/delete-product/${id}`);
}

const instance = new DatabaseService;
export default instance;