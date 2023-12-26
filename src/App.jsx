// import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/adminLayout";
import LoginPage from "./modules/Auth/page/login";
import ProductIndexPage from "./modules/Product/page";
import ProductCreatePage from "./modules/Product/page/create";
import NotFoundPage from "./page/notFound";
function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path='/login' />
      <Route element={<NotFoundPage />} path='*' />
      <Route path='/' element={<AdminLayout />}>
        <Route element={<ProductIndexPage />} path='/product/index' />
        <Route element={<ProductCreatePage />} path='/product/create' />
      </Route>
    </Routes>
  );
}

export default App;
