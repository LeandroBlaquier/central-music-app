import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleCard from "./pages/ArticleCard";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ArticleCard />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
