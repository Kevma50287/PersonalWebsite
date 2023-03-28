import "./Switch.scss";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  const [move, setMove] = useState("Right");
  const toggleCircle = () => {};
  return (
    <>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch" onClick={toggleTheme}>
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    </>
  );
};

export default Switch;
