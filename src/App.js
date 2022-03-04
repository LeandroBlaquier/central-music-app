import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GearHead from "./pages/GearHead";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GearHead />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
