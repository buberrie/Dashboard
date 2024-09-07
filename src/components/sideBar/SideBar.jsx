import ToggleMode from "./toggleDark/ToggleMode";
import logo from "./assets/logo.svg";
import { sidebarIcons, sidebarSecIcons } from "../../constant";
import { useEffect, useState, useRef } from "react";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredSecIcon, setHoveredSecIcon] = useState(null);
  const [expand, setExpand] = useState(false);
  const [mobile, setMobile] = useState(false);
  const sidebarRef = useRef(null);

  const handleNavClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth < 768) {
      setMobile(true);
    } else if (windowWidth > 768) {
      setMobile(false);
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
    console.log(mobile, windowWidth);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setExpand(false); // Close the sidebar when clicking outside
    }
  };

  return (
    <div
      className={`md:w-fit w-full top-0 left-0 md:sticky fixed transition-all duration-300 ${
        expand ? "md:bg-transparent bg-[#00000081] z-50" : "bg-transparent"
      } h-screen`} onClick={handleClickOutside}>
      <div
       ref={sidebarRef}
        className={`sidebar-container z-30 overflow h-screen ${
          expand ? "md:w-[11rem] w-[9rem]" : "md:w-[5rem] sm:w-[3rem] w-[2rem]"
        } overflow-scroll `}>
        <nav
          className={`sidebar flex-between flex-col w-full transition-all h-screen py-5 z-40`}
          onClick={handleClick}>

          <div className="w-full md:gap-6 gap-2 flex-center flex-col">
            <a href="./">
              <img src={logo} alt="logo" className="mb-5 px-1" />
            </a>
            {sidebarIcons.map((icon, index) => (
              <div
                key={index}
                className={`relative md:mb-2 mb-8 md:border-x-[3px] ${
                  expand ? "border-x-[3px]" : "border-x"
                } border-l-transparent w-full flex-center ${
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
                    className={` ${
                      expand ? "p-2" : "sm:p-2 p-[0.4rem]"
                    } rounded-full ${
                      index === activeIndex
                        ? "light"
                        : "bg-transparent border-transparent"
                    }`}
                  />
                </a>
                <span
                  className={` icon-text flex items-center md:text-sm text-[0.75rem] text-center font-semibold ${
                    !expand
                      ? "absolute text-[0] left-0 top-8 opacity-100 w-full justify-center"
                      : "relative text-[0.65rem] left-2 top-0 opacity-0 w-[60%] justify-start"
                  } `}
                  style={{
                    opacity: expand || hoveredIcon === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}>
                  {icon.title}
                </span>
              </div>
            ))}

            {/* light mode toggle button */}
            <ToggleMode expand={expand} />
          </div>

          <div className=" w-full mb:mt-0 mt-28 gap-4 flex-center flex-col mb-5">
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
                    className={`${
                      expand ? "p-2" : "sm:p-2 p-[0.4rem]"
                    } rounded-full cursor-pointer ${
                      index === 0 && expand ? "rotate-180" : ""
                    } transition-transform delay-150`}
                  />
                </a>
                <span
                  className={`capitalize icon-text flex items-center md:text-sm text-[0.75rem] font-semibold ${
                    !expand
                      ? "absolute text-[0] left-0 top-8 opacity-100 w-full justify-center"
                      : "relative text-[0.65rem] left-2 opacity-0 w-[60%] justify-start"
                  } `}
                  style={{
                    opacity: expand || hoveredSecIcon === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}>
                  {index === 0 ? (!expand ? "expand" : "close") : secIcon.title}
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
