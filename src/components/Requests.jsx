import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  //   if (!requests) return;

  if (requests && requests.length === 0) {
    return "No requests recieved";
  }

  console.log(requests && requests);

  return (
    <div className="min-h-screen mb-16">
      <h1 className="text-center p-3 font-bold text-3xl">Requests recieved</h1>
      <div className="justify-center">
        {requests && requests.map((request) => {
          const { firstName, lastName, age, photoURL, description, gender } =
            request.sender;
          return (
            <div className="card mx-auto w-[30%] my-3 card-sm card-side p-3 flex items-center bg-base-300 shadow-sm  ">
              <div>
                <img
                  className="w-28 rounded-full m-2 border border-accent"
                  src={photoURL}
                />
              </div>
              <div>
                <h1>
                  {firstName} {lastName}
                </h1>
                <p>
                  {age} {gender}
                </p>
                <p>{description}</p>
                <button className="btn m-2 btn-soft btn-primary">Reject</button>
<button className="btn m-2  btn-soft btn-secondary">Accept</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Requests;
