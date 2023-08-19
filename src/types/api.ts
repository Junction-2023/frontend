interface ProductListRequest {
  searchKeyword: string;
  category: string;
  subCategory: string;
  page: number;
  size: number;
}

interface ProductListResponse {
  products: ProductListItem[];
  totalPage: number;
  totalCount: number;
}

interface ProductListItem {
  id: string;
  productCode: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
}

interface ProductListItemResponse {
  id: number;
  productCode: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  qrLinkUrl: string;
  mustViewReviewCount: number;
  displayTime: number;
  displayOptions: DisplayOption[];
}

interface DisplayOption {
  id: number;
  optionName: string;
  optionValue: string;
  isActive: boolean;
}

interface ProductOptionUpdateRequest {
  options: ProductOption[];
  displayReviewCount: number;
  displayTime: number;
}

interface ProductOption {
  optionName: string;
  optionValue?: string;
  isActive: boolean;
}

interface ReviewUpdateRequest {
  toVisible: boolean; // 미노출 -> 노출 : true && 노출 -> 미노출 : false
  reviewIds: number[];
}

interface ReviewListRequest {
  status: string;
  searchKeyword: string;
  type: string;
  cursor?: string;
  size: number;
}

interface ReviewListResponse {
  reviews: ReviewDetail[];
  hasNext: boolean;
  totalCount: number;
}

interface ReviewDetail {
  id: number;
  profileImageUrl: string;
  userName: string;
  content: string;
  reviewData: string;
  imageUrls: string[];
  status: string;
}

interface ReviewSummaryList {
  reviewSummary: ReviewSummaryListItem[];
  productName: string;
}

interface ReviewSummaryListItem {
  rating: number;
  count: number;
}
