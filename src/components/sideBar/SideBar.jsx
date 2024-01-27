import ToggleMode from "./toggleDark/ToggleMode";
import logo from "./assets/logo.svg";
import { sidebarIcons, sidebarSecIcons } from "../../constant";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredSecIcon, setHoveredSecIcon] = useState(null);
  const [expand, setExpand] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleNavClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth < 768) {
      setMobile(true)
    } else if (windowWidth > 768) {
      setMobile(false)
    }

    if (typeof window !== "undefined") {
      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Detach the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth]); // Empty dependency array means this effect runs once after the initial render

  const handleClick = (e) => {
    if (mobile && !e.target.classList.contains("toggle-btn")) {
      setExpand(!expand);
    }
    console.log(mobile, windowWidth)
  };
  
  return (
    <div className={`md:w-fit w-full top-0 left-0 md:sticky fixed ${expand ? "md:bg-transparent bg-[#00000081] z-50" : "bg-transparent"} h-screen`}>
      <div className={`sidebar-container z-30 overflow h-screen ${expand ? "md:w-[11rem] w-[9rem]" : "md:w-[5rem] sm:w-[3rem] w-[2rem]"} overflow-y-scroll `}  >
      <nav className={`sidebar flex-between flex-col ${expand ? "md:w-[11rem] w-[9rem]" : "md:w-[5rem] sm:w-[3rem] w-[2rem]"} transition-all md:h-[55rem] h-screen py-5 z-40`} onClick={handleClick}>
        <div className="w-full md:gap-4 gap-2 flex-center flex-col">
          <a href="./">
            <img src={logo} alt="logo" className="mb-5 px-1" />
          </a>
          {sidebarIcons.map((icon, index) => (
            <div
              key={index}
              className={`relative md:mb-0 mb-6 md:border-x-[3px] ${expand ? "border-x-[3px]" : "border-x"} border-l-transparent w-full flex-center ${
                index === activeIndex
                  ? "border-r-[#0D062D] pointer-events-none"
                  : "border-transparent"
              } hover:cursor-pointer transition-all`}
              onClick={() => handleNavClick(index)}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}>
              <a href="#">
                <img
                  src={icon.imgUrl}
                  alt={icon.alt}
                  className={` p-2 rounded-full ${
                    index === activeIndex
                      ? "light"
                      : "bg-transparent border-transparent"
                  }`}
                />
              </a>
              <span
                className={`icon-text flex items-center md:text-sm text-[10px] text-center font-semibold ${!expand ? "absolute text-[8px] left-0 top-8 opacity-100 w-full justify-center" : "relative text-[10px] left-2 top-0 opacity-0 w-[60%] justify-start" } `}
                style={{
                  opacity: expand || hoveredIcon === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}>
                {icon.title}
              </span>
            </div>
          ))}
            <ToggleMode expand={expand}/>
        </div>
        <div className="w-full mb:mt-0 mt-28 gap-4 flex-center flex-col mb-5">
          {sidebarSecIcons.map((secIcon, index) => (
            <div
              key={index}
              className=" md:mb-0 mb-5 relative flex-center w-full cursor-pointer"
              onMouseEnter={() => setHoveredSecIcon(index)}
              onMouseLeave={() => setHoveredSecIcon(null)}
              onClick={index === 0 ? () => setExpand(!expand) : null}>
              <a href="#">
                <img
                  src={secIcon.imgUrl}
                  alt={secIcon.alt}
                  className={`p-2 rounded-full cursor-pointer ${index === 0 && expand ? "rotate-180" : ""} transition-transform delay-150`}
                />
              </a>
              <span
                className={`icon-text flex items-center md:text-sm font-semibold ${!expand ? "absolute text-[8px] left-0 top-8 opacity-100 w-full justify-center" : "relative text-[10px] left-2 opacity-0 w-[60%] justify-start" } `}
                style={{
                  opacity: expand || hoveredSecIcon === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}>
                {index === 0 ? !expand ? "expand" : "close" : secIcon.title}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </div>
    </div>
  );
};

export default SideBar;
