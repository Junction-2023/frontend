import axios from 'axios';
import { toast } from 'react-toastify';

const apiClient = axios.create({
  baseURL: '',
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const { status } = err.response;
    if (status >= 400) {
      toast.error('');
    }
  },
);

export default apiClient;
