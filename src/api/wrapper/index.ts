import API_URL from '../../constant/API_URL';
import {
  ProductListItemResponse,
  ProductListRequest,
  ProductListResponse,
  ProductDetailUpdateRequest,
  ReviewListRequest,
  ReviewListResponse,
  ReviewSummaryListResponse,
  ReviewUpdateRequest,
  CategoriesResponse,
} from '../../types/api';
import apiClient from '../apiClient';

export const getProductList = (params: ProductListRequest) =>
  apiClient.get<ProductListResponse>(API_URL.PRODUCTS(), { params }).then((res) => res.data);
export const getProductDetail = (productId: string) =>
  apiClient.get<ProductListItemResponse>(API_URL.PRODUCT_DETAIL(productId)).then((res) => res.data);
export const patchProductDetail = (productId: string, body: ProductDetailUpdateRequest) =>
  apiClient.patch(API_URL.PRODUCT_DETAIL(productId), body);
export const patchProductReview = (productId: string, body: ReviewUpdateRequest) =>
  apiClient.patch(API_URL.PRODUCT_REVIEWS(productId), body);
export const getProductReviews = (productId: string, params: ReviewListRequest) =>
  apiClient.get<ReviewListResponse>(API_URL.PRODUCT_REVIEWS(productId), { params }).then((res) => res.data);
export const getProductReviewsSummary = (productId: string) =>
  apiClient
    .get<ReviewSummaryListResponse>(API_URL.PRODUCT_REVIEWS_SUMMARY(productId))
    .then((res) => res.data);
export const getCategories = () =>
  apiClient.get<CategoriesResponse[]>(API_URL.CATEGORIES()).then((res) => res.data);
