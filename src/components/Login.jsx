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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);

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
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      setPopUpMessage("Login successful");
    } catch (err) {
      console.error("the error is " + err);
      setErrorMessage(err.response?.data || "Login failed. Please try again.");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data));
      navigate("/profile");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      setPopUpMessage("Signup successful");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="card w-96 bg-base-300 py-8 mb-20 m-auto card-xl shadow-sm mt-30">
        <div className="card-body">
          <h2 className="card-title font-bold m-auto p-3 text-3xl">
            {isLogin ? "Login" : "Signup"}
          </h2>
          {!isLogin && (
            <>
              <label className="floating-label my-2">
                <span>FirstName</span>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  className="input input-md"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="floating-label my-2">
                <span>LastName</span>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  className="input input-md"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </>
          )}
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
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              className="input input-md"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p onClick={()=>setShowPassword(!showPassword)} className="text-sm cursor-pointer">Show password</p>
          </label>
          <div className=" flex m-3 card-actions">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              className="btn btn-primary m-auto p-5 mb-5"
              onClick={isLogin ? handleLogin : handleSignUp}
            >
              {isLogin ? "Login" : "Signup"}
            </button>
            <p
              className=" text-center cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "New to DevTinder? Signup"
                : "Already have account? Login"}
            </p>
          </div>
        </div>
        {showToast && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>{popUpMessage}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
