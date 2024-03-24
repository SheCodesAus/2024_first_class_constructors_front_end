import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  
  export default App;