import Button from "./Button";
import Nav2 from "./Nav2";
import { useContext } from "react"
import { ThemeDataContext } from "../Context/ThemeContext"

const Navbar = (props) => {
     const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <> 
    <div className={theme}>
     <div className='nav1'>
      <h3> Vishal</h3>
      <Nav2 />
    </div>

    </div>
    </>
   
  );
};

export default Navbar;
