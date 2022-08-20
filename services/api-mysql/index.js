import ServiceBase from "../ServiceBase";

class DatabaseService extends ServiceBase {
    
    saveProduct = (data) => this.client.post(`/add-product`, data);

    getProducts = () => this.client.get("/get-products");

    getProductById = (id) => this.client.get(`/get-product/${id}`);

    updateProduct = (data) => this.client.put(`/update-product/${id}`, data);

    deleteProduct = (id) => this.client.delete(`/delete-product/${id}`);
}

const instance = new DatabaseService;
export default instance;