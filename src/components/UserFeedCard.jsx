import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserFeedCard = (userData) => {
  const dispatch = useDispatch();
  console.log(userData);

  const {
    _id,
    firstName,
    lastName,
    photoURL,
    skills,
    description,
    age,
    gender,
  } = userData?.user;

  const sendUserRequest = async (status, id) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(id));
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="card  bg-base-300 my-20 mx-auto w-96 shadow-lg">
      <figure className="px-10 pt-10">
        <img src={photoURL} alt={firstName + "photo"} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {skills && <p>{skills}</p>}
        <p>
          {age} - {gender}
        </p>
        {description && <p>{description}</p>}
        <div className="card-actions">
          <button
            className="btn bg-primary"
            onClick={() => sendUserRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn  bg-secondary"
            onClick={() => sendUserRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFeedCard;
