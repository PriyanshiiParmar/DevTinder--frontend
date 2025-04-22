import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const getConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) {
    return (
      <div className="text-center font-bold text-3xl m-10 p-5">
  
        <img
          className="m-auto h-50 sm:h-70 rounded-md"
          src="https://img.freepik.com/premium-vector/concept-illustration-man-woman-friends-having-online-conversation-messaging-chatting-communication-texting-messages-mobile-phone-apps-flat-cartoon-style_270158-412.jpg"
        />
         <h1 className="m-4 text-xl sm:text-xl text-center  italic">
          {/* No connections yet, huh? Keep pushing that code, and soon someone will be really into your pull requests  */}
          The connection queue’s empty... but the explore tab is full of
          potential matches
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen mb-20">
      <h1 className="text-center font-bold text-3xl m-5">Connections</h1>
      <div className="">
        {connections
          .filter((connection) => connection)
          .map((connection) => (
            <div
              key={connection._id}
              className="m-auto card w-[80%] sm:w-[60%] md:w-[45%] lg:w-[35%] my-3 card-sm card-side p-3 flex items-center bg-base-300 shadow-sm "
            >
              <div>
                <img
                  className="w-40 rounded-full border border-accent p-1"
                  src={connection?.photoURL}
                />
              </div>
              <div className="m-2">
                <h1 className="font-bold text-xl">
                  {connection?.firstName} {connection?.lastName}
                </h1>
                <p>{connection?.description}</p>
                <p>
                  {connection?.age} {connection?.gender}
                </p>
              </div>
            </div>
            //   console.log(connection?.firstName);
          ))}
      </div>
    </div>
  );
};
export default Connections;
