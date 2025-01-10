import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons
import "./Theme.css"
const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div className="theme-switcher z-[999]">
      <button
        className={`switch-button ${theme === true ? 'light' : 'dark'}`}
        onClick={() => dispatch(toggleTheme())}
      >
        <div className="switch-circle">
          {theme === true ? <FaSun /> : <FaMoon />}
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;