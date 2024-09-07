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
    <div className={` px-1 mt-4 cursor-pointer ${!expand ? "lg:w-[3.8rem] md:w-[3.3rem] w-[1.5rem] lg:py-4 py-2" : "w-[3.5rem] py-4"}  flex-center flex-col gap-4 rounded-full toggle-btn toggle-btn-div`} onClick={toggleDarkMode}>
      <img src={light} alt="light mode" className={` ${!expand ? "md:w-10 w-5" : "w-8"} rounded-full ${isDarkMode ? "bg-transparent" : "bg-primary_green"} p-[0.25rem] toggle-btn transition-all`}/>
      <img src={dark} alt="dark mode" className={`${!expand ? "md:w-10 w-5" : "w-8"} rounded-full p-1 ${isDarkMode ? "bg-primary_green" : "bg-transparent"} toggle-btn transition-all`} />
    </div>
  );
};

export default ToggleMode;
