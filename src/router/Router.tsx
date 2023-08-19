import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageTemplate from '../component/Template/PageTemplate';
import URL from '../constant/URL';
import MainPage from '../page/MainPage/MainPage';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import ProductPage from '../page/ProductPage/ProductPage';
import { ProductReviewPage } from '../page/ProductReviewPage/ProductReviewPage';
import ReviewManagePage from '../page/ReviewManagePage/ReviewManagePage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageTemplate />}>
          <Route path={URL.MAIN} element={<MainPage />} />
          <Route path={URL.PRODUCT} element={<ProductPage />} />
          <Route path={URL.REVIEW_MANAGE} element={<ReviewManagePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route>
          <Route path={URL.PRODUCT_REVIEW} element={<ProductReviewPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
