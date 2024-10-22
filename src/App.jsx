import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main.jsx"
import FilterProducts from "./components/FilterProducts/FilterProducts.jsx";
import SingleProduct from "./components/FilterProducts/SingleProduct.jsx";
import Login from "./components/Login/Login.jsx";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  const user = useSelector((state) => state.auth.user);
  const { authUser } = user;

  return (
    <div className="text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main></Main> : <Login></Login>} ></Route>
          <Route path="/filteredProducts/:type" element={<FilterProducts />}></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
