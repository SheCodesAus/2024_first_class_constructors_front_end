import { NavLink } from "react-router-dom";
import SignupForm from "../components/SignupForm";

function SignupPage() {
  return (
    <div className="flex flex-col justify-center align-center space-y-8 my-12 mx-8">
      <div className="bg-[url('/assets/Images/purple_top-view-composition-festive-wrapped-gifts-with-copy-space.jpg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-500 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
          <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
            Sign Up
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mx-2 md:mx-20 md:px-20 lg:mx-40 lg:px-20 xl:mx-80 xl:px-20">
      <h2 className="font-fredoka text-h3 text-center text-primary-200 tracking-wider">Already have an account? Log in <NavLink to="/login" className="underline">Here</NavLink></h2>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
