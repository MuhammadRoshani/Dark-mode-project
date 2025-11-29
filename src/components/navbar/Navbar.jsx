import "./Navbar.css";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function Navbar({ theme, setTheme }) {
  //   toggleTheme func
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`navbar ${theme}`}>
      <div className="icon" onClick={toggleTheme}>
        {/* check our themes dark or light for show icon on navbar : */}

        {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </div>
    </div>
  );
}

export default Navbar;
