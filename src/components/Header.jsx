import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="mt-6">
      <div className="mx-4 flex flex-row justify-between">
        <h6 className="font-fredoka text-primary-200">$ AUD</h6>
        <div className="flex flex-row gap-4">
          <img
            src="src/assets/Images/GiftIconVector.svg"
            alt="Gift Compare Icon"
            className="w-auto h-7"
          />
          <img
            src="src/assets/Images/SignInIconVector.svg"
            alt="Sign In Compare Icon"
            className="w-auto h-7"
          />
        </div>
      </div>
      <div className="m-4 flex flex-col items-center">
        <Link to="/">
          <img
            src="src/assets/Images/GIFT_COMPARE_LOGO.svg"
            alt="Gift Compare Logo"
            className="w-max-w-lg h-20"
          />
        </Link>
      </div>
      <div className="px-6 flex flex-col items-center">
        <img
          src="src/assets/Images/A_ good_gift_makes_every_moment_happy.svg"
          alt="A good gift"
          className="h-auto w-80 m-2"
        />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
