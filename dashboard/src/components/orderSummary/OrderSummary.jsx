import { orderSums } from "../../constant"
import NumberAnimate from "./NumberAnimate"

const OrderSummary = () => {
  return (
    <article className=" flex items-center justify-center flex-wrap gap-4 h-full l:w-[40%] w-full l:mt-0 mt-4 md:px-0 px-2">
        {orderSums.map((item, index) => (
            <div key={index} className=" box flex justify-between flex-col sm:p-3 px-4 py-3 l:w-[47%] sm:w-[48.5%] w-full l:h-[47%] h-[11rem]">
               <div className=" w-full flex-between">
                <img src={item.imgUrl} alt="icon" className="border p-2 rounded-full"/>
                <img src={item.chartUrl} alt="chart" />
               </div>
               <h2 className="w-full  text-[1.125rem]">{item.title}</h2>
               <NumberAnimate number={item.value} symbol={item.Symbol}/>
               <div className="w-full flex-between">
                <div className=" text-[0.75rem] flex-between w-fit rounded-full px-3 py-1" style={{backgroundColor: `${item.bgColor}`, color: `${item.textColor}`}}>
                  <img src={item.trendUrl} alt="trend arrow" />
                  <small className="ml-1">{item.percentage}%</small>
                </div>
                <small className=" w-fit text-[0.75rem]"><small className="mr-1">vs.</small>  previous month</small>
               </div>
            </div>
        ))}
    </article>
  )
}

export default OrderSummary