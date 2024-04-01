import { useContext } from "react";
import useUser from "../hooks/use-user.js";
import { AuthContext } from "./AuthProvider.jsx";

function ProfileCard() {
  const { auth } = useContext(AuthContext); //this accesses auth directly 
  const userId = auth.id 
  const token = auth.token
  
  const { user, isLoading, error } = useUser(userId, token);
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
    <div className="border bg-white shadow rounded-lg p-4 m-12 md:mx-40 lg:mx-80 w-auto h-full">
    <div className="flex flex-col items-center text-center md:text-left space-y-4 md:space-y-2 p-6 mb-3">
      <h1 className="text-h1 font-bold text-primary-200">My Profile</h1>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-8 md:space-y-4">
        <img className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover" src="src/assets/Images/avatar-1577909_1280.webp" alt="default avatar icon" />
        <div className="space-y-1">
          <p className="font-montserrat  text-primary-200">User ID: {user.id}</p>
          <p className="font-montserrat text-primary-200">Name: {user.first_name} {user.last_name}</p>
          <p className="font-montserrat text-primary-200">Email: {user.email}</p>
          <p className="font-montserrat text-primary-200">Date Joined: {new Date(user.date_joined).toLocaleDateString("en-GB")}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProfileCard;
