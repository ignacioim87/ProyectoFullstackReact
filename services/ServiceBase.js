import axios from "axios";

export default class ServiceBase {
    client;
    
    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:3002/api/v1/"
        })
    }
}