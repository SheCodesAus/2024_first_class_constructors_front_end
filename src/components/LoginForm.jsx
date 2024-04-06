import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";

function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (credentials.username === "" || credentials.password === "") {
      alert("Please fill in all the fields");
      return;
    }

    if (credentials.username && credentials.password) {
      postLogin(credentials.username, credentials.password).then((response) => {
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("id", response.user_id);
        window.localStorage.setItem("username", response.username);
        setAuth({
          token: response.token,
          id: response.user_id,
          username: response.username,
        });
        navigate("/");
      });
    }
  };

  return (
    <div class="border rounded-md bg-white shadow py-6 px-10">
      <form class="space-y-6 pb-4">
        <label class="block text-h4 font-fredoka text-slate-700 space-y-2">
          <span>
            Username:
          </span>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="Enter your username"
            class="font-montserrat w-full py-3 px-4 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
            focus:outline-none focus:border-primary-200/40 focus:ring-1 focus:ring-primary-200
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-primary-300 invalid:text-primary-300
            focus:invalid:border-primary-300 focus:invalid:ring-primary-300
            "
          />
        </label>
        <label class="block text-h4 font-fredoka text-slate-700 space-y-2">
          <span>
            Password:
          </span>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="Enter your password"
            class="font-montserrat w-full py-3 px-4 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
            focus:outline-none focus:border-primary-200/40 focus:ring-1 focus:ring-primary-200
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-primary-300 invalid:text-primary-300
            focus:invalid:border-primary-300 focus:invalid:ring-primary-300
            "
          />
        </label>
        <label class="block">
          <button
            className="flex justify-center border rounded-md bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h4 uppercase text-center w-full p-3 backdrop:tracking-wider"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
        </label>
      </form>
    </div>
  );
}

export default LoginForm;
