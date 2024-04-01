import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

function Header() {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("username");
    setAuth({ token: null, id: null, username: null });
  };

  return (
    <div className="mt-6">
      <div className="mx-4 flex flex-row justify-between">
        <h5 className="font-fredoka text-h5 text-primary-200">$ AUD</h5>
        
        {/* GIFT COMPARE LOGO */}
        <div className="m-4 flex flex-col items-center">
          <NavLink to="/">
            <img
              src="src/assets/Images/GIFT_COMPARE_LOGO.svg"
              alt="Gift Compare Logo"
              className="w-max-w-lg h-20"
            />
          </NavLink>
        </div>
        <div className="flex flex-row space-x-3">
          {/* COMAPRE ICON */}
          <div className="flex flex-row gap-4">
            <NavLink to="/compare">
              <img
                src="src/assets/Images/GiftIconVector.svg"
                alt="Gift Compare Icon"
                className="w-auto h-6"
              />
            </NavLink>
          </div>

          {/* USER NAVIGATION */}
          <nav>
            {auth.token ? (
              <ul className="flex flex-row space-x-3">
                <li>
                  <NavLink to="/ProfilePage">
                    <img
                      src="src/assets/Images/SignInIconVector.svg"
                      alt="Sign In Compare Icon"
                      className="w-auto h-6"
                    />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={handleLogout} className="font-fredoka text-h5 decoration-slice text-primary-200 uppercase">
                    Log Out
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink
                    to="/login"
                    className="font-fredoka text-h5 decoration-slice text-primary-200 uppercase"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>

      {/* GIFT COMPARE SLOGAN */}
      <div className="px-6 flex flex-col items-center">
        <img
          src="src/assets/Images/A_ good_gift_makes_every_moment_happy.svg"
          alt="A good gift"
          className="h-auto w-80 m-2"
        />
      </div>
      {/* EVENT CATEGORY NAV */}
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
