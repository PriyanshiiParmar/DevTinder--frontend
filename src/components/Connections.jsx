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
    return <div className="text-center font-bold text-3xl m-3">No connections found</div>;
  }

  return (
    <div className="min-h-screen mb-20">
      <h1 className="text-center font-bold text-3xl m-5">Connections</h1>
      <div className="">
        {connections
          .filter((connection) => connection)
          .map((connection) => (
            <div key={connection._id} className="m-auto card w-[80%] sm:w-[60%] md:w-[45%] lg:w-[35%] my-3 card-sm card-side p-3 flex items-center bg-base-300 shadow-sm ">
              <div>
                <img className="w-40 rounded-full border border-accent p-1" src={connection?.photoURL} />
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
