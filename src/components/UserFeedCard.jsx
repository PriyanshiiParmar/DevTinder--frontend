import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import {useState} from 'react';

const UserFeedCard = (userData) => {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");

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
      setShowToast(true);
      if(status === 'ignored')
        setPopUpMessage("Ignored the profile successfully");
      else setPopUpMessage("Sent connection request successfully");
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="card mb-40 sm:mb-20   bg-base-300 my-10 mx-auto w-66 sm:w-82 shadow-lg">
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
     {showToast &&  <div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span>{popUpMessage}</span>
  </div>
</div>}
    </div>
  );
};

export default UserFeedCard;
