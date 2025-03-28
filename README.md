import {useState} from 'react';
// import axios from 'axios'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleLogin = async() =>{
    //     try{
    //         await axios.post('http://localhost:7777/login', {email, password}, {withCredentials: true})
    //     }
    //     catch(err)
    //     {
    //         console.log(err);
    //     }
    // }

  return (
    <div>
      <div className="card w-96 bg-base-300 m-auto card-xl shadow-sm mt-30">
        <div className="card-body">
          <h2 className="card-title font-bold m-auto p-3 text-3xl">Login</h2>
          <label className="floating-label my-2">
            <span>Your Email</span>
            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
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
              onChange = {(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="justify-end m-3 card-actions">
            <button className="btn btn-primary m-auto p-5" >Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
