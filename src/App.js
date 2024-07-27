import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import ProductsPage from './Pages/ProductsPage';
import AddToCartPage from './Pages/AddToCartPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import AddressPage from './Pages/AddressPage';
import Login from './auth/Login';
import Protected from './auth/Protected';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<Protected />}>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/productsPage' element={<ProductsPage />} />
        <Route path='/productDetailPage' element={<ProductDetailPage />} />
        <Route path='/addressPage' element={<AddressPage />} />
        <Route path='/addtoCart' element={<AddToCartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
