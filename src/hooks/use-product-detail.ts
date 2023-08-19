import { useQuery } from 'react-query';
import { getProductDetail } from '../api/wrapper';
import { ProductDetailResponse } from '../types/api';

export const useProductDetail = (productId: string) => {
  const { data, refetch } = useQuery<ProductDetailResponse>(['product', productId], () =>
    getProductDetail(productId),
  );

  return { data, refetch };
};
