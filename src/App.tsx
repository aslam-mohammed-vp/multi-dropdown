import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MultiDropdown from "./components/multi-dropdown/MultiDropDown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MultiDropdown />
    </>
  );
}

export default App;
