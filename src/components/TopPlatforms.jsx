import { useEffect, useRef, useState } from "react";
import { topPlatforms } from "../constant";

const TopPlatforms = () => {
  // chartbar animation
  const [width, setWidth] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setWidth(true)
        }
      }, { threshold: 0.5 });

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    // Optional: Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [barRef]);

  return (
    <article ref={barRef} className="l:w-[40%] w-full sm:p-5 px-4 py-4 l:mt-0 mt-4 box">
      <div className="text-[1.125rem] flex-between">
        <h2 className="dark-text l:text-lg text-base">Top Platforms</h2>
        <span className="cursor-pointer text-primary_green hover:scale-105 transition-all">
          See all
        </span>
      </div>
      {topPlatforms.map((item, index) => (
        <div key={index} className="my-8">
          <span className="dark-text ">{item.title}</span>
          <div className="h-2 my-3 rounded-full w-full progress-bar">
            <div
              className="h-full rounded-full border"
              style={{
                width: width ? `${item.width}%` : "0",
                backgroundColor: `${item.bgColor}`,
                transition: 'width 2s ease'
              }}></div>
          </div>
          <div className="flex-between">
            <small>{item.amount}</small>
            <small>+{item.percentage}%</small>
          </div>
        </div>
      ))}
    </article>
  );
};

export default TopPlatforms;
