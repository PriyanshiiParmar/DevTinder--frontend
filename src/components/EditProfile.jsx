import { useState } from "react";
import UserFeedCard from "./UserFeedCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [description, setDescription] = useState(user?.description);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [errorMessage, setErrorMessage] = useState();
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  console.log(user);

  const saveProfile = async () => {
    console.log("Save button clicked...");

    try {
      const res = await axios.post(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          description,
          photoURL,
        },
        { withCredentials: true }
      );

      console.log("Profile updated successfully:", res.data);
      dispatch(addUser(res.user));
      setShowToast(true);
      if (errorMessage) setErrorMessage(" ");
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error(
        "Error updating profile:",
        err.response?.data || err.message
      );
      setErrorMessage(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex  flex-col sm:flex-row">
      <div className="card  bg-base-300 my-20 mx-auto w-96 shadow-lg">
        <div className="card-body">
          <h2 className="card-title font-bold m-auto p-3 text-3xl">
            Edit Profile
          </h2>
          <label className="floating-label my-2">
            <span>First Name </span>
            <input
              type="text"
              placeholder="Enter firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input input-md"
            />
          </label>

          <label className="floating-label my-2">
            <span>Last Name </span>
            <input
              type="text"
              placeholder="Enter lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input input-md"
            />
          </label>
          <label className="floating-label my-2">
            <span>Age</span>
            <input
              type="text"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input input-md"
            />
          </label>
          <label className="floating-label my-2">
            <span>Gender</span>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="select select-neutral input-md"
            >
              <option disabled value="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </label>
          <label className="floating-label my-2">
            <span>Description</span>
            <input
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-md"
            />
          </label>
          <label className="floating-label my-2">
            <span>PhotoURL</span>
            <input
              type="text"
              placeholder="Enter photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-md"
            />
          </label>

          <div className=" flex m-3 card-actions">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              className="btn btn-primary m-auto p-5"
              onClick={saveProfile}
            >
              Update & Save
            </button>
          </div>
        </div>
      </div>
      <UserFeedCard 
        user={{ firstName, lastName, age, description, photoURL, gender }}
      />
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditProfile;
