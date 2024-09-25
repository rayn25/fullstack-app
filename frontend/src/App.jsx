import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index.jsx";
import LoginPage from "./pages/LoginPage/index.jsx";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import NavBar from "./layouts/NavBar/index.jsx";
import Footer from "./layouts/Footer/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "./store/thunkFunctions.js";
import ProtectedPage from "./pages/ProtectedPage/index.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import NotAuthRoutes from "./components/NotAuthRoutes.jsx";
import HistoryPage from "./pages/HistoryPage/index.jsx";
import CartPage from "./pages/CartPage/index.jsx";
import DetailProductPage from "./pages/DetailProductPage/index.jsx";
import UploadProductPage from "./pages/UploadProductPage/index.jsx";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <NavBar />
      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        {/*로그인한 사람만 갈 수 있는 경로  */}
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/product/upload" element={<UploadProductPage />} />
          <Route path="/product/:productId" element={<DetailProductPage />} />
          <Route path="/user/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Route>

        {/*로그인한 사람은 갈 수 없는 경로  */}
        <Route element={<NotAuthRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
