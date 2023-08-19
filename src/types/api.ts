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
