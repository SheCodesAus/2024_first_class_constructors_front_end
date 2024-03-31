// import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div>
      <div>
        {/* <h1>Log in or <NavLink to="/createaccount">Create Account</NavLink></h1> */}
        <div>
        <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;