import { useState, useEffect } from 'react';
import light from '../assets/light.svg'
import dark from '../assets/dark.svg'

const ToggleMode = ({expand}) => {
  const storedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;

  const [isDarkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={` px-1 mt-4 bg-white cursor-pointer ${!expand ? "l:w-[3.8rem] md:w-[2.8rem] w:[1.5rem] md:py-4 py-2" : "w-[3.5rem] py-4"}  flex-center flex-col gap-4 rounded-full toggle-btn`} onClick={toggleDarkMode}>
      <img src={light} alt="light mode" className={` ${!expand ? "md:w-10 sm:w-6 w-4" : "w-8"} rounded-full bg-primary_green p-1 toggle-btn`}/>
      <img src={dark} alt="dark mode" className={`${!expand ? "md:w-10 sm:w-6 w-4" : "w-8"} toggle-btn`} />
    </div>
  );
};

export default ToggleMode;
