import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res?.data));
      navigate("/");
    } catch (err) {
      console.error("the error is " + err);
      setErrorMessage(err.response?.data || "Login failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-300 py-8 mb-20 m-auto card-xl shadow-sm mt-30">
        <div className="card-body">
          <h2 className="card-title font-bold m-auto p-3 text-3xl">Login</h2>
          <label className="floating-label my-2">
            <span>Your Email</span>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-md"
            />
          </label>
          <label className="floating-label my-2">
            <span>Password</span>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              className="input input-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className=" flex m-3 card-actions">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              className="btn btn-primary m-auto p-5"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
