import { useEffect, useState, useRef } from "react";
import { salesTrends, salesTrendsValue } from "../constant";
import { IoIosArrowDown } from "react-icons/io";

// import Select from "react-select";

const Analytics = () => {
  const [selectedRange, setSelectedRange] = useState("monthly");
  const [OptionDropdown, setOptionDropdown] = useState(false);
  const dropDownRef = useRef(null)

  // Function to get the values by selected id based on the selected id
  function getValuesForId(selectedId, sales) {
    const trend = sales.find((item) => item.id === selectedId);
    return trend ? trend.values : [];
  }

  const values = getValuesForId(selectedRange, salesTrends);
  const valuesDetail = getValuesForId(selectedRange, salesTrendsValue);

  // find the highest value in the trend array
  function getHighestHeightItem(trendArray) {
    return trendArray.reduce((maxItem, currentItem) => {
      return parseFloat(currentItem.height) > parseFloat(maxItem.height)
        ? currentItem
        : maxItem;
    });
  }

  const highestHeightItem = getHighestHeightItem(valuesDetail);

  const [hoveredPrice, setHoveredPrice] = useState(highestHeightItem.id);

  // chartbar animation
  const [height, setHeight] = useState(false);

  useEffect(() => {
    setHeight(true);
    setHoveredPrice(highestHeightItem.id)
  }, [selectedRange]);

  // close dropdown when user clicks anywhere on the screen
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOptionDropdown(false); // Close the sidebar when clicking outside
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  return (
    <section className="box lg:w-[65%] w-full h-full relative lg:mr-3 mr-0 pt-3 lg:pb-0 pb-[4rem] lg:px-5 px-3">
      <div className="flex-between">
        <h2 className="dark-text lg:text-lg text-base">Sales Trends</h2>
        <div className="flex-center md:gap-4 gap-3">
          <span className="lg:text-[1rem] text-[0.8rem]">Sort by:</span>
          <div className=" w-fit relative z-[2]" ref={dropDownRef}>
            <label
              className="border w-fit rounded-[2rem] z-[1] cursor-pointer base:p-3 p-2 flex-between base:gap-4 gap-3"
              htmlFor="trend">
              <input
                type="text"
                id="trend"
                className="hidden"
                value={selectedRange}
                onClick={() => {
                  setOptionDropdown(!OptionDropdown);
                }}
              />
              <span className="capitalize base:text-base text-sm">
                {selectedRange}
              </span>
              <IoIosArrowDown
                size={18}
                className={` ${OptionDropdown ? " rotate-180 " : " rotate-0 "} transition-all duration-300 md:w-[1.5rem] w-[0.875rem] icon-color`}
              />
            </label>
            <ul
              className={`${
                OptionDropdown
                  ? "opacity-100 top-14 pointer-events-auto"
                  : "opacity-0 top-0 pointer-events-none"
              } overflow-hidden w-full box border absolute transition-all duration-500`}>
              {salesTrends.map((trend) => (
                <li
                  key={trend.id}
                  className={`p-3 ${
                    selectedRange == trend.id
                      ? "bg-[#34CAA5] text-white"
                      : "hover:bg-[#34CAA51A]"
                  } cursor-pointer capitalize sm:text-base text-sm`}
                  onClick={() => {
                    setSelectedRange(trend.id), setOptionDropdown(false);
                  }}>
                  {trend.id}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-5 w-full relative">
        {/* prices range */}
        {values.map((value, index) => (
          <div key={index} className="flex justify-between items-baseline">
            <span className="sm:w-[5rem] w-[3.45rem] sm:text-[0.75rem] text-[0.65rem] relative sm:top-1 top-[0.2rem]">
              {value}
            </span>
            <div className="w-full h-[1.5rem] border-y-[1px] dashed-border border-dashed"></div>
          </div>
        ))}

        <main className="absolute w-full h-full flex justify-end items-end">
          <div
            className="overflow overflow-x-scroll relative sm:top-[2.9rem] top-[2.9rem]"
            style={{ width: "var(--chart-width)" }}>
            <div className="scroll-snap relative flex justify-between items-end w-fit">
              {valuesDetail?.map((info, index) => (
                // candles
                <div key={index} className=" flex-center flex-col relative">
                  {/* candle price */}
                  <div
                    className="relative flex-center flex-col base:top-3 top-1"
                    style={{
                      opacity: hoveredPrice === info.id ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}>
                    <div className="bg-dark text-white md:w-[4.15rem] sm:w-[3rem] w-[2.3rem] md:text-[0.75rem] sm:text-[0.5rem] text-[0.45rem] font-semibold py-1 rounded-lg z-[1] text-center">
                      {info.price}
                    </div>
                    <div className="bg-dark lg:w-[1.2rem] md:w-[1rem] w-[0.85rem] lg:h-[1.2rem] md:h-[1rem] h-[0.85rem] transition-transform rotate-45 relative lg:-top-[1rem] -top-[.65rem]"></div>
                  </div>

                  {/* candle sticks */}
                  <div
                    className="md:w-[2.1rem] sm:w-[1.5rem] w-[1.2rem] bg-[#34CAA51A] hover:bg-[#34caa448] rounded-t-3xl"
                    style={{
                      height: height ? `${info.height}rem` : "0",
                      background:
                        info?.height === highestHeightItem.height
                          ? "linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0) 100%)"
                          : "",
                      transition: "height 2s ease",
                    }}
                    onMouseEnter={() => setHoveredPrice(info.id)}
                    onMouseLeave={() => setHoveredPrice(highestHeightItem.id)}></div>

                  {/* sales date */}
                  <div className={`md:w-[2rem] w-[1.5rem] ${selectedRange == "monthly" ? "md:h-[2.3rem] h-[2.2rem]" : ""} text-center md:text-[0.8rem] text-[0.75rem] relative mt-[0.875rem] whitespace-wrap`}>
                    {info.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Analytics;
