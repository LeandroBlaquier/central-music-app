import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import ProductCard from "./components/pages/ProductCard";
import Error404 from "./components/pages/Error404";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
