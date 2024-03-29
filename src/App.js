import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/pages/home/Home";
import Shop from "./pages/shop/Shop";
import Seller from "./pages/seller/Seller";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import SellerInd from "./pages/sellerInd/SellerInd";
import Product from "./pages/product/Product";
import Follow from "./pages/follow/Follow";
import Cart from "./pages/cart/Cart";
import Account from "./pages/account/Account";
import Order from "./components/Order";

import UserInfoOrder from "./components/UserInfoOrder";
import Social from "./pages/social/Social";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";
import AdminSocialControl from "./pages/admin/AdminSocialControl";
import AdminProductsControl from "./pages/admin/AdminProductsControl";
import AdminOrdersControl from "./pages/admin/AdminOrdersControl";
import AdminOrderControlInd from "./pages/admin/AdminOrderControlInd";
import AdminUsersControl from "./pages/admin/AdminUsersControl";
import AdminUserControlInd from "./pages/admin/AdminUserControlInd";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/socialcontrol"
            element={
              <ProtectedAdminRoute>
                <AdminSocialControl />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/productcontrol"
            element={
              <ProtectedAdminRoute>
                <AdminProductsControl />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/ordercontrol"
            element={
              <ProtectedAdminRoute>
                <AdminOrdersControl />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/ordercontrol/:id"
            element={
              <ProtectedAdminRoute>
                <AdminOrderControlInd />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/usercontrol"
            element={
              <ProtectedAdminRoute>
                <AdminUsersControl />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/usercontrol/:id"
            element={
              <ProtectedAdminRoute>
                <AdminUserControlInd />
              </ProtectedAdminRoute>
            }
          />
          {/* Admin routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/:slug" element={<Product />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/seller/:id" element={<SellerInd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/social" element={<Social />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/userorder/:id" element={<UserInfoOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
