import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const reviewRequest = async (status, id) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      console.log("Dispatching removeRequest for ID:", id);
      dispatch(removeRequest(id));
    } catch (err) {
      console.log(err);
    }
  };

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
    return (
      <div>
      <h1 className="m-4 text-xl sm:text-3xl text-center font-bold italic">
      {/* No connections yet, huh? Keep pushing that code, and soon someone will be really into your pull requests  */}
      No requests yet... but don’t worry, your perfect match might just be a click away 
     </h1>
     <img className="m-auto h-50 sm:h-96" src="https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting-concept-illustration_335657-2034.jpg"/>
   </div>
    );
  }

  console.log(requests && requests);

  return (
    <div className="min-h-screen mb-16">
      <h1 className="text-center p-3 font-bold text-3xl">Requests recieved</h1>
      <div className="justify-center">
        {requests &&
          requests.map((request) => {
            const {
              firstName,
              lastName,
              age,
              photoURL,
              description,
              gender,
              _id,
            } = request.sender;
            return (
              <div className="card mx-auto w-[100%] sm:w-[60%] md:w-[45%] lg:w-[35%] my-3 card-sm card-side p-3 flex items-center  bg-base-300 shadow-sm  ">
                <div>
                  <img
                    className="w-28 rounded-full m-5 border border-accent"
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
                  <button
                    className="btn  btn-soft btn-primary"
                    onClick={() => reviewRequest("rejected", _id)}
                  >
                    Reject
                  </button>
                  <button
                    className="btn m-2  btn-soft btn-secondary"
                    onClick={() => reviewRequest("accepted", _id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Requests;
