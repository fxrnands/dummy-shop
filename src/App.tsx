import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, ProductDetail, ProductList } from "./pages";
import { useState, useEffect } from "react";
import { Navbar } from "./components";

function App() {
  const [isRootPath, setIsRootPath] = useState<boolean>(true);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsRootPath(currentPath === "/");

    return () => {
      setIsRootPath(true);
    };
  }, []);

  return (
    <Router>
      {isRootPath ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
