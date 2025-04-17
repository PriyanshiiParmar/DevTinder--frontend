import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
        if(user) return ;
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      console.log(err);
      if(err.status)
      navigate('/login')
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
