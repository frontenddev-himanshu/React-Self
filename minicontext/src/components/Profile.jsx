import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-2xl ml-5">Please Login</div>

  return <div className="text-2xl ml-5">Wlecome {user.username}</div>
};

export default Profile;
