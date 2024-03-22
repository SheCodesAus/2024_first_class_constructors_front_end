import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
// import FooterBar from "./components/Footer/FooterBar.jsx";

const App = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
        {/* <FooterBar /> */}
      </div>
    );
  };
  
  export default App;