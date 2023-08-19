export interface ProductListRequest {
  searchKeyword?: string;
  category?: string;
  subCategory?: string;
  page: number;
  size?: number;
}

export interface ProductListResponse {
  products: ProductListItem[];
  totalPage: number;
  totalCount: number;
}

export interface ProductListItem {
  id: string;
  productCode: string;
  productImageUrl: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  accumulatedReviews: number;
  averageStarRating: number;
}

export interface ProductDetailResponse {
  id: number;
  productCode: string;
  productImageUrl: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  qrLinkUrl: string;
  displayReviewCount: number;
  displayTime: number;
  displayOptions: DisplayOption[];
}

export interface DisplayOption {
  id: number;
  optionName: string;
  isActive: boolean;
}

export interface ProductDetailUpdateRequest {
  selectedOptionIds: number[];
  displayReviewCount: number;
  displayTime: number;
}

export interface ProductOption {
  optionName: string;
  optionValue?: string;
  isActive: boolean;
}

export interface ReviewUpdateRequest {
  reviewIds: number[];
}

export interface ReviewListRequest {
  keyword: string;
  type?: string;
  isVisible: boolean;
  cursor?: string;
  page?: number;
  size: number;
}

export interface ReviewListResponse {
  reviews: ReviewDetail[];
  hasNext: boolean;
  totalCount: number;
}

export interface ReviewDetail {
  id: number;
  profileImageUrl: string;
  userName: string;
  content: string;
  reviewDate: string[];
  imageUrls: string[];
  visible: boolean;
}

export interface ReviewSummaryListResponse {
  reviewSummaries: ReviewSummaryListItem[];
  productName: string;
}

export interface ReviewSummaryListItem {
  rating: number;
  count: number;
}

export interface CategoriesRequest {}

export interface CategoriesResponse {
  category: string;
  subCategories: string[];
}
