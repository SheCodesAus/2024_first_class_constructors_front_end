import { NavLink } from "react-router-dom";

function NavBar() {
  return (

    <div>
        <nav>
          <ul className="flex flex-wrap space-x-6 justify-center my-4 px-5 py-2 bg-primary-400 md:space-x-14 lg:space-x-24">
            {/* <li className="font-fredoka text-[13px] text-primary-100 uppercase hover:text-primary-300"><NavLink to="/">Home</NavLink></li> */}
            <li className="font-fredoka text-[13px] text-primary-100 uppercase hover:text-primary-300"><NavLink to="WeddingPage">Wedding</NavLink></li>
            <li className="font-fredoka text-[13px] text-primary-100 uppercase hover:text-primary-300"><NavLink to="BirthdayPage">Birthday</NavLink></li>
            <li className="font-fredoka text-[13px] text-primary-100 uppercase hover:text-primary-300"><NavLink to="GraduationPage">Graduation</NavLink></li>
            <li className="font-fredoka text-[13px] text-primary-100 uppercase hover:text-primary-300"><NavLink to="AnniversaryPage">Anniversary</NavLink></li>
            <li className="font-fredoka text-[13px] text-primary-100 uppercase hover:text-primary-300"><NavLink to="ChristmasPage">Christmas</NavLink></li>
          </ul>
        </nav>
      </div>
  );
}

export default NavBar;
