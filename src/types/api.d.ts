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
  name: string;
  category: string;
  subCategory: string;
  price: number;
}

export interface ProductListItemResponse {
  id: number;
  productCode: string;
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
  toVisible: boolean; // 미노출 -> 노출 : true && 노출 -> 미노출 : false
  reviewIds: number[];
}

export interface ReviewListRequest {
  status: string;
  searchKeyword: string;
  type: string;
  cursor?: string;
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
  reviewData: string;
  imageUrls: string[];
  status: string;
}

export interface ReviewSummaryListResponse {
  reviewSummary: ReviewSummaryListItem[];
  productName: string;
}

export interface ReviewSummaryListItem {
  rating: number;
  count: number;
}
