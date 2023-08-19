import apiClient from '../apiClient';

export const getProductList = () => apiClient.get('/products').then((res) => res.data);
