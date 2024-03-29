import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <div>
        <nav>
          <ul className="flex flex-wrap space-x-7 justify-center my-4 px-5 py-2 bg-primary-400 md:space-x-10 lg:space-x-20">
            {/* <li className="font-fredoka text-h5 text-primary-100 uppercase hover:text-primary-300"><NavLink to="/">Home</NavLink></li> */}
            <li className="font-fredoka text-h5 text-primary-100 uppercase hover:text-primary-300"><NavLink to="WeddingPage">Wedding</NavLink></li>
            <li className="font-fredoka text-h5 text-primary-100 uppercase hover:text-primary-300"><NavLink to="BirthdayPage">Birthday</NavLink></li>
            <li className="font-fredoka text-h5 text-primary-100 uppercase hover:text-primary-300"><NavLink to="GraduationPage">Graduation</NavLink></li>
            <li className="font-fredoka text-h5 text-primary-100 uppercase hover:text-primary-300"><NavLink to="AnniversaryPage">Anniversary</NavLink></li>
            <li className="font-fredoka text-h5 text-primary-100 uppercase hover:text-primary-300">CHRISTMAS</li>
            <li className="font-fredoka text-h5 text-primary-100 uppercase hover:text-primary-300">SALE</li>
          </ul>
        </nav>
      </div>
  );
}

export default NavBar;
