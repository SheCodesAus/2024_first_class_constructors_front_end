import { useContext } from "react";
import useUser from "../hooks/use-user.js";
import { AuthContext } from "./AuthProvider.jsx";

function ProfileCard() {
  const { auth } = useContext(AuthContext);
  const userId = auth.userId;

  // UseUser returns 3 things so we need to grab them all
  const { user, isLoading, error } = useUser(userId);

  if (!userId) {
    return null;
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div>
      <h1>My Profile</h1>
      <div>
        <img src="/images/avatar-1577909_1280.webp" alt="default avatar icon" />
        <div>
        <h2>{user.username}</h2>
          <p>User ID: {user.id}</p>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <p>
            Date Joined:{" "}
            {new Date(user.date_joined).toLocaleDateString("en-GB")}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfileCard;
