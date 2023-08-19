const API_URL = {
  PRODUCTS: () => '/products',
  PRODUCT_DETAIL: (productId: string) => `/products/${productId}`,
  PRODUCT_REVIEWS: (productId: string) => `/products/${productId}/reviews`,
  PRODUCT_REVIEWS_SUMMARY: (productId: string) => `/products/${productId}/reviews-summary`,
};

export default API_URL;
