import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api-fms.data.ventitechnologies.net/deployment"
})