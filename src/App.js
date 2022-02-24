import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductCard from './components/pages/ProductCard';
import Error404 from './components/pages/Error404';
import SubHero from "./ui/SubHero";
import Footer from "./ui/Footer";
import './App.css'

function App() {
  return(
    <>
    <SubHero/>
    <Router>
      <Routes>
        <Route path='/' element={<ProductCard/>}></Route>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}
export default App;


