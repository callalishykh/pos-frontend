// import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/adminLayout";
import AdminCreatePage from "./modules/Admin/page/create";
import LoginPage from "./modules/Auth/page/login";
import ProductIndexPage from "./modules/Product/page";
import ProductCreatePage from "./modules/Product/page/create";
import NotFoundPage from "./page/notFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminIndexPage from "./modules/Admin/page";
import AdminUpdatePage from "./modules/Admin/page/update";
function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route element={<LoginPage />} path='/login' />
        <Route element={<NotFoundPage />} path='*' />
        <Route path='/' element={<AdminLayout />}>
          <Route element={<ProductIndexPage />} path='/product/index' />
          <Route element={<ProductCreatePage />} path='/product/create' />
          <Route element={<AdminCreatePage />} path='/admin/create' />
          <Route element={<AdminIndexPage />} path='/admin/index' />
          <Route element={<AdminUpdatePage />} path='/admin/:admin_id/update' />
        </Route>
      </Routes>
    </>
  );
}

export default App;
