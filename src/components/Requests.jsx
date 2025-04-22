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
     <img className="m-auto h-50 sm:h-96" src="https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting-concept-illustration_335657-2034.jpg"/>
      <h1 className="m-4 text-xl sm:text-3xl text-center font-bold italic">
      {/* No connections yet, huh? Keep pushing that code, and soon someone will be really into your pull requests  */}
      No requests yet... but don’t worry, your perfect match might just be a click away 
     </h1>
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
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-4 p-4 bg-base-300 shadow rounded-2xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
  <div>
    <img
      className="w-28 h-28 rounded-full border-2 border-accent object-cover"
      src={photoURL}
      alt={`${firstName} ${lastName}`}
    />
  </div>
  <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
    <h1 className="text-xl font-semibold">{firstName} {lastName}</h1>
    <p className="text-sm text-gray-500">{age} • {gender}</p>
    <p className="my-2 w-80 text-base">{description}</p>
    <div className="flex space-x-3 mt-3">
      <button
         className="btn  btn-soft btn-primary"
        onClick={() => reviewRequest("rejected", _id)}
      >
        Reject
      </button>
      <button
        className="btn  btn-soft btn-secondary"
        onClick={() => reviewRequest("accepted", _id)}
      >
        Accept
      </button>
    </div>
  </div>
</div>

            );
          })}
      </div>
    </div>
  );
};
export default Requests;
