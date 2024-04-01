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
        };

        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("id", response.user_id);
                setAuth({
                    token: response.token,
                    userId: response.user_id,
                    username: response.username
                });
                navigate("/");
            });
        }
    };

    return (
        <div class="max-w-sm mx-auto bg-white shadow py-5 px-6">

            <form class="space-y-6">
                <label class="block">
                    <span class="block text-h3 font-fredoka font-medium text-slate-700">Username</span>
                    <input onChange={handleChange} id="username" type="text" placeholder="Enter your username" class="font-montserrat mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-p shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
                </label>
                <label class="block">
                    <span class="block text-h3 font-fredoka font-medium text-slate-700 ">Password</span>
                    <input onChange={handleChange} id="password" type="password" placeholder="Enter your password" class="font-montserrat mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-p shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
                </label>
                <label class="block">
                    <button className="flex justify-center border rounded-md bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h3 uppercase text-center my-2 w-full p-4 backdrop:tracking-wider"
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