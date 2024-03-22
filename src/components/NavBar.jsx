import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="m-4 flex flex-col items-center">
        <img
          src="src/assets/Images/GIFT_COMPARE_LOGO.svg"
          alt="Gift compare"
          className="w-auto h-16"
        />
      </div>
      <div>
        <nav>
          <ul className="flex flex-row space-x-4 justify-center m-6">
            <li><NavLink to="/">HOME</NavLink></li>
            <li>TRENDING</li>
            <li>WEDDING</li>
            <li>BIRTHDAY</li>
            <li>GRADUATION</li>
            <li>ANNIVERSARY</li>
            <li>CHRISTMAS</li>
            <li>SALE</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
