import { orders } from "../../constant";
import { TbFileInvoice } from "react-icons/tb";
import Invoice from "./Invoice";
import { useState } from "react";

const LatestOrders = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleViewInvoice = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="box lg:w-[66%] w-full h-fit relative lg:mr-5 mr-0 lg:px-5 sm:p-5 px-2 py-4">
      <h2 className="dark-text lg:text-lg text-base ml-4">Latest Orders</h2>
      <div className="overflow overflow-x-scroll w-full h-full">
      <table className="mx-2 md:w-full w-[160%] h-[23rem] sm:text-base text-sm">
        <thead>
          <tr>
            <th className="text-start h-[60px] pl-2">Name</th>
            <th className="text-start">Date</th>
            <th className="text-start">Amount</th>
            <th className="text-start">Status</th>
            <th className="text-start">Invoice</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className=" border-t border-[#ccccccc1]">
              <td className="pl-2 flex items-center mt-[8px] dark-text">
                <img
                  src={order.imgUrl}
                  alt={order.imgAlt}
                  className="rounded-full w-10 h-10 object-cover mr-4"
                />
                {order.name}
              </td>
              <td>{order.date}</td>
              <td className="dark-text">{order.amount}</td>
              <td style={{ color: `${order.textColor}` }}>{order.status}</td>
              <td
                className="flex items-center relative -top-2 cursor-pointer dark-text"
                onClick={() => handleViewInvoice(index)}>
                <TbFileInvoice size={15} className="mr-1 icon-color" />
                View
              </td>
              {activeIndex === index && (
                <Invoice
                  key={`invoice-${index}`}
                  activeIndex={activeIndex}
                  onClose={() => setActiveIndex(null)}
                  name={order.name}
                  amount={order.amount}
                  delay={order.delay}
                  date={order.date}
                  status={order.status}
                  color={order.textColor}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default LatestOrders;
