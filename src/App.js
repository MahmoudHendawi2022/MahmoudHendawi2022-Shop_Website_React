import "./App.css";
import { Navbar } from "./Components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop, ShopCategory, Cart, Product, LoginSignUp } from "./Pages/index";
import banner_mens from "./Components/Assets/banner_mens.png";
import banner_women from "./Components/Assets/banner_women.png";
import banner_kids from "./Components/Assets/banner_kids.png";
import Footer from "./Components/Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={banner_mens} category="men" />}
          />
          <Route
            path="/womans"
            element={<ShopCategory banner={banner_women} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner_kids} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/loginSignUp" element={<LoginSignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
