import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserFeedCard from "./UserFeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    // if(feed) return;
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      console.log(res);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed || feed.length === 0) {
    return (
      <h1 className="text-center font-bold text-3xl m-5">No new users found</h1>
    );
  }

  return (
    <div>
      <h1 className="mt-4 text-3xl text-center font-bold">
        Connect with Devs Who Speak Your Language.
      </h1>
      {/* <TinderCard
            key={user.id}
            className="swipe"
            onSwipe={(dir) => swiped(dir, user.id)}
            onCardLeftScreen={() => outOfFrame(user.id)}
            preventSwipe={["up", "down"]}
          > */}
      {feed && <UserFeedCard user={feed[0]} />}
      {/* </TinderCard> */}
    </div>
  );
};
export default Feed;
