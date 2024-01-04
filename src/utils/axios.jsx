import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAxios = () => {
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3301",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 1000,
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status == 401) {
        navigate("/login");
      } else if (err.response.status == 500) {
        toast.error(err.response?.data?.message);
      }
      return err;
    }
  );
  return axiosInstance;
};
export default useAxios;
