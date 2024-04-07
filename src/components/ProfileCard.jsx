import { useContext } from "react";
import useUser from "../hooks/use-user.js";
import { AuthContext } from "./AuthProvider.jsx";
import IsLoading from "./IsLoading.jsx";
import NotFoundMessage from "../components/NotFound";

function ProfileCard() {
  const { auth } = useContext(AuthContext); //this accesses auth directly
  const userId = auth.id;
  const token = auth.token;

  const { user, isLoading, error } = useUser(userId, token);
  if (!userId) {
    return null;
  }

  if (isLoading) {
    return <IsLoading />;
  }

  if (error) {
    return (<div className="flex flex-col items-center"> <NotFoundMessage />
      <p>{error.message}</p> </div>)
  }

  return (
    <div className=" flex flex-col justify-center align-center space-y-8 my-12 mx-8">
      <div className="bg-[url('/assets/Images/pexels-photo-4040567.jpeg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-500 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
          <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
            My Profile
          </h1>
        </div>
      </div>
      <div className="border bg-white shadow rounded-md p-4 mx-4 md:mx-20 md:px-10 lg:mx-40 xl:mx-80 xl:px-20 h-full">
        <div className="flex flex-col items-center text-center md:text-left space-y-4 md:space-y-2 p-6 mb-3">
          <h2 className="text-h2 font-bold text-primary-200">
            {user.username}
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-8 md:space-y-4">
            <img
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover opacity-80"
              src="/assets/Images/avatar_img.jpg"
              alt="default avatar icon"
            />
            <div className="space-y-1">
              {/* <p className="font-montserrat  text-primary-200">User ID: {user.id}</p> */}
              <p className="font-montserrat text-primary-200">
                Name: {user.first_name} {user.last_name}
              </p>
              <p className="font-montserrat text-primary-200">
                Email: {user.email}
              </p>
              <p className="font-montserrat text-primary-200">
                Date Joined:{" "}
                {new Date(user.date_joined).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
