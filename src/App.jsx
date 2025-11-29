import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/card/Cards";

// note : It is not the right thing to use lifting state up to share our states to the components , but here to this project we have not nested component we use it .
function App() {
  // lifting state up : to broadcast our state to all components.
  // we make this state for dark and light mode :

  const [theme, setTheme] = useState("light");

  return (
    <div className={`appContainer ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Cards theme={theme} />
    </div>
  );
}

export default App;
