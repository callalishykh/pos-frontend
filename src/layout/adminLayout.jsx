import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/sidebar";
import TopBar from "../components/topbar";

const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/product/index")}>Products</button>
      <TopBar />
      <SideBar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
