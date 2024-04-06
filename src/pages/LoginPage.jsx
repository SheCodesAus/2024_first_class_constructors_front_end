import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="m-8">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="font-fredoka text-h2 text-primary-200 tracking-wider">Log In or Sign Up <NavLink to="/signup" className="hover:underline">Here!</NavLink></h1>
        <div>
        <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;