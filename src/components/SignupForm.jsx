import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postUser from "../api/post-user.js";
import useAuth from "../hooks/use-auth.js";
import { useLocation } from "react-router-dom";

function SignupForm() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [details, setDetails] = useState({
    username: "",
    password: "",
    first_name: state?.first_name ?? "",
    last_name: state?.last_name ?? "",
    email: state?.email ?? "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      details.first_name === "" ||
      details.last_name === "" ||
      details.email === ""
    ) {
      alert("Please fill in all the fields");
      return;
    }

    if (details.username && details.password) {
      postUser({
        username: details.username,
        password: details.password,
        first_name: details.first_name,
        last_name: details.last_name,
        email: details.email,
      }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div class="border rounded-md bg-white shadow-md py-6 px-10">
      <form class="space-y-6 pb-4">
        <label class="block text-h4 font-fredoka text-slate-700 space-y-2">
          <span>
            Username
          </span>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            autoComplete="new-username"
            placeholder="Enter your username"
            class="font-montserrat w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
            focus:outline-none focus:border-primary-200/40 focus:ring-1 focus:ring-primary-200
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-primary-300 invalid:text-primary-300
            focus:invalid:border-primary-300 focus:invalid:ring-primary-300
            "
          />
        </label>
        <label class="block text-h4 font-fredoka text-slate-700 space-y-2">
          <span>
            Password
          </span>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="Enter your password"
            class="font-montserrat w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
            focus:outline-none focus:border-primary-200/40 focus:ring-1 focus:ring-primary-200
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-primary-300 invalid:text-primary-300
            focus:invalid:border-primary-300 focus:invalid:ring-primary-300
            "
          />
        </label>
        <label class="block text-h4 font-fredoka text-slate-700 space-y-2">
          <span>
            First Name
          </span>
          <input
            onChange={handleChange}
            id="first_name"
            type="text"
            placeholder="Enter your first name"
            class="font-montserrat w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
            focus:outline-none focus:border-primary-200/40 focus:ring-1 focus:ring-primary-200
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-primary-300 invalid:text-primary-300
            focus:invalid:border-primary-300 focus:invalid:ring-primary-300
            "
          />
        </label>
        <label class="block text-h4 font-fredoka text-slate-700 space-y-2">
          <span>
            Last Name
          </span>
          <input
            onChange={handleChange}
            id="last_name"
            type="text"
            placeholder="Enter your last name"
            class="font-montserrat w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
            focus:outline-none focus:border-primary-200/40 focus:ring-1 focus:ring-primary-200
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-primary-300 invalid:text-primary-300
            focus:invalid:border-primary-300 focus:invalid:ring-primary-300
            "
          />
        </label>
        <label class="block text-h4 font-fredoka text-slate-700 space-y-2">
          <span>
            Email
          </span>
          <input
            onChange={handleChange}
            id="email"
            type="text"
            placeholder="Enter your email address"
            class="font-montserrat w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400
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
            SIGN UP
          </button>
        </label>
      </form>
    </div>
  );
}

export default SignupForm;
