import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";


function LoginForm() {
    const navigate = useNavigate();
    const {setAuth} = useAuth();

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
                window.localStorage.setItem("username",response.username)
                setAuth({
                    token: response.token,
                    id: response.user_id,
                    username: response.username
                });
                navigate("/");
            });
        }
    };

    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <button 
                    type="submit">
                    Login
                </button>
            </form>
    );
}

export default LoginForm;