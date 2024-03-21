import {Link, Outlet} from "react-router-dom";


function NavBar() {
    return(
        <div >

      <div id="navlogo">
         

   <p id="logo">Gift compare</p> 
         <nav >
        <ul id="navbar">
         <a ><Link className="navlink" to="/">Home</Link></a>
         </ul>
         </nav>

          
       </div>
         <Outlet />
        
        </div>
    );
}

export default NavBar;