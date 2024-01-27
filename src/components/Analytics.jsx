import { useEffect, useState } from "react";
import { salesMonthTrends, salesValueTrends } from "../constant";
import Select from "react-select";

const Analytics = () => {
  const [hoveredPrice, setHoveredPrice] = useState(5);

  const options = [
    { value: "Hourly", label: "Hourly" },
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: 50,
      fontSize: "12px",
      borderColor: "#33333399",
      boxShadow: "none", // Remove the box shadow
      "&:hover": {
        cursor: "pointer",
        borderColor: "#333", // Change border color on hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "13px",
      color: state.isSelected ? "white" : "black", // Text color for options
      background: state.isSelected ? "#34CAA5" : "transparent", // Background color for selected option
      "&:hover": {
        cursor: "pointer",
        backgroundColor: state.isSelected ? "" : "#34caa448", // Change border color on hover
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333333a5", // Text color for the selected option
    }),
    input: (provided) => ({
      ...provided,
      color: "black", // Text color for input
    }),
    indicatorSeparator: () => ({ display: "none" }), // Remove the separator between the components
    dropdownIndicator: (provided) => ({
      ...provided,
      width: "32px",
      color: "black", // Color of the dropdown indicator
    }),
  };

  // chartbar animation
  const [height, setHeight] = useState(false);

  useEffect(() => {
    setHeight(true);
  }, []);

  return (
    <section className="box overflow overflow-x-scroll l:w-[65%] w-full h-full relative l:mr-3 mr-0 pt-3 l:pb-0 pb-[3rem] l:px-5 sm:px-3 px-2">
      <div className="flex-between">
        <h2 className="dark-text l:text-lg text-base">Sales Trends</h2>
        <div className="flex-center gap-4">
          <span className="l:text-[1rem] text-[.8rem]">Sort by:</span>
          <Select
            options={options}
            styles={customStyles}
            isSearchable={false}
            defaultValue={options[1]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5 w-[101%]">
        {salesValueTrends.map((fig, index) => (
          <div key={index} className="flex justify-between items-baseline">
            <span className="md:w-[6.5rem] sm:w-[4rem] w-[3rem] l:text-[0.75rem] md:text-[.68rem] text-[0.6rem]">
              {fig.id}
            </span>
            <div className="w-full h-[1.2rem] border-y-[1px] border-[#ccccccd0] border-dashed"></div>
          </div>
        ))}
        <div className="flex justify-between items-end absolute bottom-[1.15rem] md:left-[6rem] sm:left-[4rem] left-[2.8rem] xxl:w-[90%] xl:w-[89%] w-[90%]">
          {salesMonthTrends.map((month, index) => (
            <div key={index} className="flex-center flex-col">
              <div
                className="relative flex-center flex-col l:top-3 top-1"
                style={{
                  opacity: hoveredPrice === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}>
                <div className="bg-dark text-white xxl:px-[.51rem] sm:px-[.4rem] px-[.15rem] xl:text-[.75rem] sm:text-[.5rem] text-[.325rem] font-semibold sm:py-1 py-[.3rem] rounded-lg z-[1]">
                  {month.price}
                </div>
                <div className="bg-dark l:w-[1.2rem] l:h-[1.2rem] sm:w-[1rem] sm:h-[1rem] w-[.5rem] h-[.5rem] transition-transform rotate-45 relative l:-top-[1rem] sm:-top-[.7rem] -top-[.3rem]"></div>
              </div>
              <div
                className="xxl:w-[1.875rem] lg:w-[1.5rem] md:w-[1.8rem] sm:w-[1.5rem] w-[.9rem] bg-[#34CAA51A] hover:bg-[#34caa448] rounded-t-3xl"
                style={{
                  height: height ? `${month.value}rem` : "0",
                  background:
                    index === 5
                      ? "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0) 100%)"
                      : "",
                  transition: "height 2s ease",
                }}
                onMouseEnter={() => setHoveredPrice(index)}
                onMouseLeave={() => setHoveredPrice(5)}></div>
              <span className="xxl:mt-[1.1rem] l:mt-[1.3rem] md:mt-[.9rem] mt-[.95rem] l:text-[0.875rem] md:text-[.78rem] text-[0.7rem]">
                {month.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
