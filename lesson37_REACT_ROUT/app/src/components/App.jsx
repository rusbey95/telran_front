import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import HomePage from './Pages/HomePage';
import BasketPage from './Pages/BasketPage';
import ProductsPage from './Pages/ProductsPage';
import NotFoundPage from './Pages/NotFoundPage';
import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
