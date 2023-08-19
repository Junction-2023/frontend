import { Outlet } from 'react-router-dom';
import { Header } from './Header';

function PageTemplate() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default PageTemplate;
