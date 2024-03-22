import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail, ProductList } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:categoryId/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
