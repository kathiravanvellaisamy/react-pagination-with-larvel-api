import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <Header />
      <main className="px-8 py-2 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
