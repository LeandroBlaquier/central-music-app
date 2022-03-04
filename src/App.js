import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
import ProductCard from "./components/pages/ProductCard";
import Error404 from "./components/pages/Error404";
import products from "./assets/products";
import ShowProducts from "./components/pages/ShowProducts";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductCard />}></Route>
          <Route path="*" element={<Error404 />} />
          <Route
            path="/products/:id"
            element={<ShowProducts products={products} />}
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
