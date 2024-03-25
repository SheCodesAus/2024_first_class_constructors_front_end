import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="m-4 flex flex-col items-center">
        <img
          src="src/assets/Images/GIFT_COMPARE_LOGO.svg"
          alt="Gift compare"
          className="w-max-w-lg h-16"
        />
     </div>  
      <div className="m-4 flex flex-col items-center">
        <img
          src="src/assets/Images/A_ good_gift_makes_every_moment_happy.svg"
          alt="Gift compare"
          className="w-44 h-18"
        />
    </div>
    <div>
        <nav>
          <ul className="flex flex-row space-x-3 justify-center m-3 bg-primary-400">
            <li><NavLink to="/">HOME</NavLink></li>
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
